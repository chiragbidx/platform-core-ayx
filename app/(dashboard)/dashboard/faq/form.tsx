'use client';

import { useActionState } from "react";
import { generateFaqAction } from "./generate-faq";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useRef } from "react";
import { Check, Copy, Loader2, AlertTriangle } from "lucide-react";

export default function FaqGeneratorForm() {
  const [state, formAction, isPending] = useActionState(generateFaqAction, undefined);
  const copyRef = useRef<HTMLTextAreaElement>(null);

  const copySchema = async () => {
    if (state?.success && copyRef.current) {
      await navigator.clipboard.writeText(state.schema);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <form action={formAction} className="space-y-6">
        <CardHeader>
          <CardTitle>AI FAQ Generator</CardTitle>
        </CardHeader>
        <CardContent>
          <label htmlFor="url" className="block font-medium mb-2">
            Website URL
          </label>
          <Input
            id="url"
            name="url"
            placeholder="https://example.com"
            type="url"
            required
            autoFocus
            disabled={isPending}
          />
          {state?.error && (
            <div className="flex items-center gap-2 mt-4 text-red-600 text-sm">
              <AlertTriangle className="h-4 w-4" /> {state.error}
            </div>
          )}
        </CardContent>
        <CardFooter className="flex-col items-start gap-4">
          <Button
            type="submit"
            disabled={isPending}
            className="mt-2 bg-orange-500 hover:bg-orange-600 text-white"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                Generate FAQ
              </>
            )}
          </Button>
          {state?.success && (
            <div className="w-full">
              <h3 className="font-semibold mb-2 mt-6">Generated FAQs:</h3>
              <div className="space-y-4">
                {state.faqs.map((f, i) => (
                  <div key={i} className="border rounded-lg p-4 bg-gray-50">
                    <div className="font-medium text-orange-700">Q: {f.question}</div>
                    <div className="mt-1 text-gray-900">A: {f.answer}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">SEO JSON-LD Schema</h4>
                  <Button
                    variant="outline"
                    size="sm"
                    type="button"
                    onClick={copySchema}
                    className="ml-2 gap-1 px-2"
                  >
                    <Copy className="w-4 h-4" />
                    Copy
                  </Button>
                </div>
                <Textarea
                  readOnly
                  className="mt-2 font-mono text-xs h-40 bg-gray-100"
                  value={state.schema}
                  ref={copyRef}
                  spellCheck={false}
                />
              </div>
            </div>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}