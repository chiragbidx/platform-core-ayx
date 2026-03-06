"use server";

import { z } from "zod";
import { openaiFaqSchema } from "@/lib/validators";

export type FAQItem = {
  question: string;
  answer: string;
};
export type FAQResult =
  | { success: true; faqs: FAQItem[]; schema: string }
  | { success: false; error: string };

// Helper: robustly extract the first JSON array from text (even with markdown/code blocks)
function extractJsonArray(text: string): string | null {
  // Remove markdown code block wrapper
  let raw = text.trim();
  if (raw.startsWith("```")) {
    // strip triple-backtick code block
    raw = raw.replace(/^```(json)?/i, "").replace(/```$/, "").trim();
  }
  // Find first "[" and last "]"
  const start = raw.indexOf("[");
  const end = raw.lastIndexOf("]");
  if (start === -1 || end === -1 || start > end) return null;
  return raw.slice(start, end + 1);
}

export async function generateFaqAction(prevState: any, formData: FormData): Promise<FAQResult> {
  const rawUrl = formData.get("url");
  const parse = openaiFaqSchema.safeParse({ url: rawUrl });

  if (!parse.success) {
    return { success: false, error: "Please enter a valid public website URL." };
  }

  const url = parse.data.url;
  let html = "";
  try {
    const res = await fetch(url as string, { method: "GET", headers: { "User-Agent": "faqlytic-bot" } });
    if (!res.ok) throw new Error("Unable to fetch webpage");
    html = await res.text();
  } catch {
    return { success: false, error: "Could not fetch webpage. Make sure it's public and reachable." };
  }

  const prompt = `
Act as an expert content marketer and web assistant. Review the HTML/text below and extract 5-10 clear and relevant FAQ question/answer pairs that would be most helpful for SEO and converting customers on this page. Focus on informative questions covering the core offering. Output as JSON: an array of objects [{ "question": "...", "answer": "..." }].

HTML/Text:
-----
${html.slice(0, 6500)}
`;

  try {
    const openAiKey = process.env.OPENAI_API_KEY;
    if (!openAiKey) {
      return { success: false, error: "AI key missing in environment. Contact support." };
    }
    const completion = await fetch('https://api.openai.com/v1/chat/completions', {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${openAiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful AI for creating SEO FAQ sections." },
          { role: "user", content: prompt }
        ],
        temperature: 0.4,
        max_tokens: 1100
      })
    });
    const json = await completion.json();

    let aiResult = json.choices?.[0]?.message?.content || "";
    let faqs: FAQItem[] = [];
    let parsed = false;

    // Try direct parse
    try {
      faqs = JSON.parse(aiResult);
      parsed = Array.isArray(faqs);
    } catch {}

    // Attempt to extract and parse just the array (for wrapped/codeblock/extra-text outputs)
    if (!parsed) {
      const arrTxt = extractJsonArray(aiResult);
      if (arrTxt) {
        try {
          faqs = JSON.parse(arrTxt);
          parsed = Array.isArray(faqs);
        } catch {}
      }
    }

    // Final error if no valid array
    if (!parsed) {
      return {
        success: false,
        error:
          "AI returned an unrecognized/improper format. Please try another page or contact support (raw output was not strictly parseable)."
      };
    }

    // Generate JSON-LD schema for Google FAQPage
    const schema = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }))
    }, null, 2);

    return { success: true, faqs, schema };
  } catch (e: any) {
    return { success: false, error: "FAQ extraction failed: " + (e?.message ?? "Unknown error.") };
  }
}