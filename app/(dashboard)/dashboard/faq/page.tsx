import FaqGeneratorForm from "./form";

export default function FaqPage() {
  return (
    <section className="max-w-3xl mx-auto p-4 lg:py-8">
      <h1 className="text-2xl font-bold mb-6">AI FAQ Generator</h1>
      <FaqGeneratorForm />
      <p className="mt-8 text-sm text-gray-600">
        Paste any public URL to generate SEO-optimized FAQ sections for landing pages, product pages, or ecommerce. Powered by AI. FAQ output includes ready-to-use Google JSON-LD schema markup.
      </p>
    </section>
  );
}