import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  CreditCard,
  Database,
  Users,
  Shield,
  Mail,
  Zap,
  CheckCircle2,
  Clock,
  Code,
  Server,
  GitBranch,
  Settings,
  Rocket,
  TrendingUp,
  Globe,
  FileText,
} from 'lucide-react';
import { Terminal } from './terminal';
import CurrentYear from '@/components/CurrentYear';
import { Suspense } from 'react';

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                Instantly Generate
                <span className="block text-orange-500">SEO-Optimized FAQs</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Faqlytic is your AI-powered FAQ generator – paste your website URL, get ready-to-deploy FAQ sections in seconds. Boost SEO, improve landing pages, delight customers. No more manual writing, just clear and actionable answers.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <a
                  href="#faq-demo"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg rounded-full"
                  >
                    Generate My FAQ
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <Terminal />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              The AI FAQ Engine for Your Website
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Faqlytic analyzes your content and creates relevant, search-friendly answers. Perfect for marketers, product teams, and store owners.
            </p>
          </div>
          <div className="mt-12 lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <Zap className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Paste &amp; Generate
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Just enter your URL – Faqlytic crawls and creates perfect-fit questions and answers.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <Database className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  SEO &amp; Schema Ready
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Copy-paste structured FAQ schema for boosted rankings and zero guesswork.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <CreditCard className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  For Any Page
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Use for product pages, landing, ecommerce, help centers &amp; more.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <Shield className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Reliable Privacy
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Built with enterprise-grade security and privacy compliance.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <Users className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Team Collaboration
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Invite team, share results, and deliver better answers together.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <Mail className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  No Coding Needed
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  FAQ blocks ready to use; simply copy and drop into your site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY FAQGENERATOR */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Faqlytic?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Turn content into conversions with instant, AI-generated question &amp; answer sections.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 mx-auto">
                <Zap className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                Paste &amp; Go
              </h3>
              <p className="mt-2 text-base text-gray-500">
                As easy as pasting your URL. Faqlytic takes care of the rest.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 mx-auto">
                <Code className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                AI Quality
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Smart Q&amp;A extracted from real content. Natural, readable answers.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 mx-auto">
                <Server className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                Always Current
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Just update your site – generate fresh FAQs as you grow.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 mx-auto">
                <Clock className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                Save Hours
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Skip writer’s block: get high-quality, relevant FAQs in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Faqlytic – Key Features
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Everything you need to generate, manage, and deploy FAQ sections for modern websites.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Paste URL to Generate',
              'SEO Schema Markup',
              'Copy-paste Output',
              'Share and Collaborate',
              'History and Versioning',
              'Ecommerce & Product Support',
              'Human Language, Not Jargon',
              'Safe and Private',
              'Export Anywhere',
              'Real Content Extraction',
              'Customizable Prompts',
              'Structured JSON/XML Download',
            ].map((feature, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5" />
                <p className="ml-3 text-base text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS / LAUNCH */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Launch with Faqlytic in 4 Steps
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Go from idea to SEO answers in minutes, not days.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-100 text-orange-500 mb-4">
                <GitBranch className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Paste Website URL
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Enter any public site or page you want to enhance.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-100 text-orange-500 mb-4">
                <Settings className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Customize Q&amp;A
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Tweak the generated FAQs, reorder, and refine the answers.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-100 text-orange-500 mb-4">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                One-click Export
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Export FAQ blocks for HTML, JSON, or rich snippet markup.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-100 text-orange-500 mb-4">
                <Rocket className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Deploy Instantly
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Copy and add your FAQs to any website, landing page, blog, or shop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Trusted Tech Stack
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Built with Next.js, AI APIs, PostgreSQL, Stripe, and the same battle-tested infrastructure as SaaS leaders.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { name: 'Next.js', desc: 'React Framework' },
              { name: 'TypeScript', desc: 'Type Safety' },
              { name: 'PostgreSQL', desc: 'Database' },
              { name: 'Prisma', desc: 'ORM' },
              { name: 'Stripe', desc: 'Subscriptions' },
              { name: 'OpenAI', desc: 'AI API' },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center hover:bg-orange-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900">{tech.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Built for Marketers, Founders &amp; Store Owners
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              From landing pages to product catalogs, Faqlytic helps you convert more traffic with the answers customers need.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white mb-4">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                SEO for Landing Pages
              </h3>
              <p className="text-gray-500">
                Give each page a conversational FAQ that ranks higher and builds trust.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Faster Ecommerce
              </h3>
              <p className="text-gray-500">
                Auto-generate product Q&amp;A to answer buying questions and reduce support.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white mb-4">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Content Marketers
              </h3>
              <p className="text-gray-500">
                Turn blog topics, articles, and resource docs into a valuable FAQ—instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-3 items-start">
          <div>
            <h3 className="text-xl font-semibold">Faqlytic</h3>
            <p className="mt-3 text-gray-300">
              Instantly generate SEO-ready Q&amp;A for any web page. Faqlytic turns URLs into high-converting FAQ sections, driving trust, conversions, and ranking.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Get Started</h4>
            <ul className="mt-3 space-y-2 text-gray-300">
              <li>AI FAQ generator</li>
              <li>SEO schema built-in</li>
              <li>One-click export</li>
              <li>No code required</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Contact &amp; Updates</h4>
            <p className="mt-3 text-gray-300">
              Product by Chirag Dodiya. For support or early access, get in touch.
            </p>
            <a
              className="inline-flex items-center mt-4 px-4 py-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors"
              href="mailto:hi@chirag.co"
            >
              Contact Chirag
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400">
            <span>© <Suspense fallback="—"><CurrentYear /></Suspense> Faqlytic. All rights reserved.</span>
            <div className="flex space-x-4 mt-2 sm:mt-0">
              <a className="hover:text-white" href="/privacy">
                Privacy
              </a>
              <a className="hover:text-white" href="/terms">
                Terms
              </a>
              <a className="hover:text-white" href="mailto:hi@chirag.co">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}