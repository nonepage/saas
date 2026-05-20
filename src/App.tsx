import type { ComponentType } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Check,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  CloudCog,
  Cpu,
  FileText,
  Fingerprint,
  Gauge,
  Globe2,
  Layers3,
  LockKeyhole,
  Mail,
  Menu,
  MessageSquare,
  Network,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
  X,
} from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'

type IconType = ComponentType<{ className?: string }>

const company = {
  name: 'VectorGrid AI',
  tagline: 'Enterprise AI infrastructure for teams that ship with confidence.',
  email: 'hello@vectorgrid.example',
}

const navItems = [
  { label: 'Products', to: '/products' },
  { label: 'Services', to: '/services' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Docs', to: '/docs' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

const products = [
  {
    icon: Cpu,
    title: 'Model Gateway',
    text: 'Route AI workloads across approved providers with policy checks, budget controls, and full request visibility.',
  },
  {
    icon: Workflow,
    title: 'Automation Studio',
    text: 'Design review, support, and research workflows that combine human approvals with secure model actions.',
  },
  {
    icon: ShieldCheck,
    title: 'Governance Console',
    text: 'Track usage, risk, prompts, vendors, and audit trails from a single command center for leadership and security.',
  },
]

const services = [
  'AI readiness assessment',
  'Secure model integration',
  'Private knowledge workflows',
  'Prompt and evaluation systems',
  'Payment and credit operations',
  'Ongoing enablement for teams',
]

const metrics = [
  ['48h', 'prototype window'],
  ['99.9%', 'observability target'],
  ['12', 'governance checks'],
  ['SOC2+', 'deployment posture'],
]

const pricing = [
  {
    name: 'Launch',
    price: '$1,500',
    detail: 'For a focused website, pilot, or executive demo.',
    features: ['AI product positioning', 'One workflow prototype', 'Analytics-ready frontend', 'Deployment guide'],
  },
  {
    name: 'Scale',
    price: '$4,800',
    detail: 'For teams moving AI into real operations.',
    featured: true,
    features: ['Product and service site', 'Secure workflow architecture', 'Stripe-ready commercial pages', 'Docs and changelog'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    detail: 'For regulated or multi-team deployments.',
    features: ['Governance model', 'Vendor risk mapping', 'Private integrations', 'Delivery roadmap'],
  },
]

const docs = [
  {
    slug: 'deployment',
    title: 'Deployment Guide',
    excerpt: 'Recommended hosting, domain, CDN, and environment setup for the static frontend.',
  },
  {
    slug: 'security',
    title: 'Security Notes',
    excerpt: 'How to present AI products responsibly with clear data handling and compliance language.',
  },
  {
    slug: 'content-model',
    title: 'Content Model',
    excerpt: 'A practical structure for products, services, pricing, docs, changelog, and blog content.',
  },
]

const posts = [
  {
    slug: 'enterprise-ai-buying',
    title: 'What enterprise buyers expect from an AI vendor website',
    date: 'May 12, 2026',
    excerpt: 'Trust signals, plain language, use cases, and commercial paths matter more than spectacle.',
  },
  {
    slug: 'governance-first',
    title: 'Governance-first AI does not need to feel slow',
    date: 'April 28, 2026',
    excerpt: 'A small number of opinionated controls can make pilots faster and easier to approve.',
  },
]

const changelog = [
  ['v1.2.0', 'Added pricing comparison, legal pages, and deployment notes.'],
  ['v1.1.0', 'Improved product cards and service discovery sections.'],
  ['v1.0.0', 'Initial open-source enterprise AI website release.'],
]

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen text-slate-900">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/changelog" element={<ChangelogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<LegalPage type="terms" />} />
            <Route path="/privacy" element={<LegalPage type="privacy" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/86 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3" aria-label={`${company.name} home`}>
          <LogoMark />
          <span className="text-sm font-bold tracking-wide text-slate-950">{company.name}</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-medium transition ${
                  isActive ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link to="/changelog" className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
            Changelog
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-teal-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-800"
          >
            Talk to us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white md:hidden"
          type="button"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-1">
            {[...navItems, { label: 'Changelog', to: '/changelog' }].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-3 py-3 text-sm font-medium text-slate-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

function LogoMark() {
  return (
    <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-slate-950 text-white shadow-sm">
      <Network className="h-5 w-5" />
      <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-teal-400" />
    </span>
  )
}

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Section
        eyebrow="Products"
        title="A sharper front door for enterprise AI work."
        text="Present the value, controls, and buying path clearly, then give teams the confidence to start a real conversation."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {products.map((product) => (
            <FeatureCard key={product.title} {...product} />
          ))}
        </div>
      </Section>
      <OperationalSection />
      <PricingPreview />
      <ContentPreview />
      <CTA />
    </>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      <div className="shell-grid absolute inset-x-0 top-0 h-96 opacity-80" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:py-24">
        <div className="flex flex-col justify-center">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">
            <Sparkles className="h-3.5 w-3.5" />
            Enterprise AI, made explainable
          </div>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
            Build trust before the first AI pilot begins.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {company.name} is an open-source corporate website starter for AI infrastructure,
            consulting, and service teams that need a credible public presence.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Explore products
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/docs"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
            >
              Read docs
              <BookOpen className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {metrics.map(([value, label]) => (
              <div key={label} className="border-l border-slate-200 pl-4">
                <div className="text-2xl font-bold text-slate-950">{value}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <HeroConsole />
      </div>
    </section>
  )
}

function HeroConsole() {
  const rows = [
    ['routing', 'approved', 'claude-ops'],
    ['risk', 'low', 'policy-12'],
    ['budget', '$428', 'remaining'],
    ['latency', '812ms', 'p95'],
  ]

  return (
    <div className="data-surface soft-shadow relative rounded-lg border border-slate-200 p-3">
      <div className="rounded-md border border-slate-200 bg-white">
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
          <div>
            <div className="text-sm font-semibold text-slate-950">AI operations board</div>
            <div className="text-xs text-slate-500">Live vendor, policy, and spend signals</div>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            healthy
          </div>
        </div>
        <div className="grid gap-3 p-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <MiniPanel icon={Gauge} label="Daily usage" value="68%" />
            <MiniPanel icon={LockKeyhole} label="Guardrails" value="12/12" />
          </div>
          <div className="overflow-hidden rounded-md border border-slate-200">
            {rows.map(([key, status, note]) => (
              <div key={key} className="grid grid-cols-[1fr_auto_auto] gap-3 border-b border-slate-100 px-3 py-3 last:border-b-0">
                <span className="text-sm font-medium text-slate-700">{key}</span>
                <span className="text-sm font-semibold text-slate-950">{status}</span>
                <span className="text-xs text-slate-500">{note}</span>
              </div>
            ))}
          </div>
          <div className="code-window rounded-md bg-slate-950 p-4 text-xs leading-6 text-slate-200">
            <div className="text-teal-300">$ vectorgrid deploy --policy enterprise</div>
            <div className="text-slate-400">checks passed: audit, billing, privacy, docs</div>
            <div className="text-white">release ready for production review</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MiniPanel({ icon: Icon, label, value }: { icon: IconType; label: string; value: string }) {
  return (
    <div className="rounded-md border border-slate-200 bg-slate-50 p-4">
      <Icon className="h-5 w-5 text-teal-700" />
      <div className="mt-4 text-2xl font-bold text-slate-950">{value}</div>
      <div className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</div>
    </div>
  )
}

function TrustBar() {
  const items = ['Healthcare', 'Fintech', 'Developer tools', 'Operations', 'Professional services']

  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-7 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="text-sm font-semibold text-slate-500">Designed for teams where AI claims need evidence.</div>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Section({ eyebrow, title, text, children }: { eyebrow: string; title: string; text: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="mb-10 max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-teal-700">{eyebrow}</div>
          <h2 className="text-balance mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">{text}</p>
        </div>
        {children}
      </div>
    </section>
  )
}

function FeatureCard({ icon: Icon, title, text }: { icon: IconType; title: string; text: string }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 transition hover:border-teal-200 hover:shadow-sm">
      <div className="grid h-11 w-11 place-items-center rounded-md bg-teal-50 text-teal-700">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </article>
  )
}

function OperationalSection() {
  return (
    <section className="border-b border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[0.85fr_1.15fr] md:py-20">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-teal-300">Services</div>
          <h2 className="text-balance mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            From public website to production-grade AI narrative.
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            Use this repo as a polished starting point for the pages buyers expect before they book a call or review a proposal.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] p-4">
              <Check className="h-5 w-5 shrink-0 text-teal-300" />
              <span className="font-medium text-slate-100">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingPreview() {
  return (
    <Section
      eyebrow="Pricing"
      title="Simple commercial paths for service teams."
      text="Publish clear starting points without pretending every enterprise deployment is identical."
    >
      <PricingGrid compact />
    </Section>
  )
}

function PricingGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {pricing.map((plan) => (
        <article
          key={plan.name}
          className={`rounded-lg border p-6 ${
            plan.featured ? 'border-teal-600 bg-teal-50 shadow-sm' : 'border-slate-200 bg-white'
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-bold text-slate-950">{plan.name}</h3>
            {plan.featured && <span className="rounded-full bg-teal-700 px-2.5 py-1 text-xs font-semibold text-white">Popular</span>}
          </div>
          <div className="mt-5 text-3xl font-bold text-slate-950">{plan.price}</div>
          <p className="mt-3 leading-7 text-slate-600">{plan.detail}</p>
          <ul className={`mt-6 grid gap-3 ${compact ? '' : 'min-h-40'}`}>
            {plan.features.map((feature) => (
              <li key={feature} className="flex gap-3 text-sm text-slate-700">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
                {feature}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}

function ContentPreview() {
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20">
        <ContentList title="Docs" icon={BookOpen} items={docs} to="/docs" />
        <ContentList title="Blog" icon={FileText} items={posts} to="/blog" />
      </div>
    </section>
  )
}

function ContentList({ title, icon: Icon, items, to }: { title: string; icon: IconType; items: Array<{ title: string; excerpt: string }>; to: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-md bg-slate-100 text-slate-700">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-bold text-slate-950">{title}</h3>
        </div>
        <Link to={to} className="text-sm font-semibold text-teal-700">
          View all
        </Link>
      </div>
      <div className="grid gap-3">
        {items.slice(0, 3).map((item) => (
          <div key={item.title} className="rounded-md border border-slate-200 p-4">
            <div className="font-semibold text-slate-950">{item.title}</div>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function CTA() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-lg bg-slate-950 p-8 text-white md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Ready to publish a credible AI company site?
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                Fork the repo, rename the brand, adjust the content model, and deploy it as a modern static website.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Start a conversation
              <MessageSquare className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductsPage() {
  return (
    <PageFrame
      eyebrow="Products"
      title="Productized pages for AI infrastructure, operations, and governance."
      text="Each product section is written to explain business value, technical posture, and buying intent without overpromising."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {products.map((product) => (
          <FeatureCard key={product.title} {...product} />
        ))}
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {[
          [Layers3, 'Vendor-neutral architecture', 'Describe how your offer works across model providers and cloud environments.'],
          [Fingerprint, 'Identity-aware workflows', 'Show how teams, approvals, and access controls shape everyday usage.'],
          [CircleDollarSign, 'Commercial clarity', 'Make prepaid credits, retainers, pilots, or managed service plans easy to understand.'],
          [Globe2, 'Global-ready content', 'Keep page structures clean enough to translate into additional markets later.'],
        ].map(([Icon, title, text]) => (
          <FeatureCard key={String(title)} icon={Icon as IconType} title={String(title)} text={String(text)} />
        ))}
      </div>
    </PageFrame>
  )
}

function ServicesPage() {
  return (
    <PageFrame
      eyebrow="Services"
      title="A service catalog for serious AI adoption."
      text="The page structure is tuned for consultancies, infrastructure teams, and AI implementation partners."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service, index) => (
          <div key={service} className="rounded-lg border border-slate-200 bg-white p-6">
            <div className="text-sm font-bold text-teal-700">0{index + 1}</div>
            <h3 className="mt-3 text-xl font-bold text-slate-950">{service}</h3>
            <p className="mt-3 leading-7 text-slate-600">
              Package the offer with outcomes, review gates, delivery expectations, and a clear next step for buyers.
            </p>
          </div>
        ))}
      </div>
    </PageFrame>
  )
}

function PricingPage() {
  return (
    <PageFrame
      eyebrow="Pricing"
      title="Transparent starting points, flexible enterprise delivery."
      text="A pricing page for service-led companies that need simple packages without hiding complex work behind vague forms."
    >
      <PricingGrid />
    </PageFrame>
  )
}

function DocsPage() {
  return (
    <PageFrame
      eyebrow="Docs"
      title="Implementation notes for teams editing the site."
      text="Use the docs area to publish deployment notes, product documentation, buyer enablement, or trust center content."
    >
      <div className="grid gap-4">
        {docs.map((doc) => (
          <DocRow key={doc.slug} title={doc.title} excerpt={doc.excerpt} />
        ))}
      </div>
    </PageFrame>
  )
}

function BlogPage() {
  return (
    <PageFrame
      eyebrow="Blog"
      title="Thought leadership without the fog."
      text="Short, practical articles can reinforce the company's judgment before a prospect talks to sales."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-lg border border-slate-200 bg-white p-6">
            <div className="text-sm font-semibold text-slate-500">{post.date}</div>
            <h3 className="mt-3 text-xl font-bold text-slate-950">{post.title}</h3>
            <p className="mt-3 leading-7 text-slate-600">{post.excerpt}</p>
            <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-700">
              Read article
              <ChevronRight className="h-4 w-4" />
            </div>
          </article>
        ))}
      </div>
    </PageFrame>
  )
}

function ChangelogPage() {
  return (
    <PageFrame
      eyebrow="Changelog"
      title="Product updates that show momentum."
      text="A public changelog is a quiet way to show the company is actively improving its offer."
    >
      <div className="grid gap-3">
        {changelog.map(([version, text]) => (
          <div key={version} className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-5 sm:flex-row sm:items-center">
            <span className="w-24 rounded-full bg-slate-950 px-3 py-1 text-center text-sm font-bold text-white">{version}</span>
            <span className="leading-7 text-slate-700">{text}</span>
          </div>
        ))}
      </div>
    </PageFrame>
  )
}

function ContactPage() {
  return (
    <PageFrame
      eyebrow="Contact"
      title="Start with the use case, not a sales script."
      text="Replace the sample contact details with your own form backend, scheduler, or CRM capture flow."
    >
      <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <Mail className="h-6 w-6 text-teal-700" />
          <h3 className="mt-4 text-xl font-bold text-slate-950">Contact channel</h3>
          <p className="mt-3 leading-7 text-slate-600">
            Email <span className="font-semibold text-slate-950">{company.email}</span> or connect this page to your preferred form provider.
          </p>
          <div className="mt-6 grid gap-3">
            {['AI workflow pilot', 'Enterprise website rebuild', 'Governance review'].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <BadgeCheck className="h-4 w-4 text-teal-700" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <form className="rounded-lg border border-slate-200 bg-white p-6">
          <div className="grid gap-4">
            <FormField label="Name" placeholder="Ada Lovelace" />
            <FormField label="Work email" placeholder="ada@company.com" type="email" />
            <FormField label="Project brief" placeholder="Tell us what you want this site to communicate." textarea />
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
            >
              Send inquiry
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </PageFrame>
  )
}

function FormField({ label, placeholder, type = 'text', textarea = false }: { label: string; placeholder: string; type?: string; textarea?: boolean }) {
  const className =
    'mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/15'

  return (
    <label className="block text-sm font-semibold text-slate-700">
      {label}
      {textarea ? <textarea rows={5} className={className} placeholder={placeholder} /> : <input type={type} className={className} placeholder={placeholder} />}
    </label>
  )
}

function LegalPage({ type }: { type: 'terms' | 'privacy' }) {
  const title = type === 'terms' ? 'Terms of Use' : 'Privacy Policy'

  return (
    <PageFrame
      eyebrow="Legal"
      title={title}
      text="This sample text is included so the open-source website has the expected public pages. Replace it with counsel-approved language."
    >
      <div className="rounded-lg border border-slate-200 bg-white p-6 leading-8 text-slate-700">
        <p>
          {company.name} is a demo brand for an open-source frontend website. The repository does not collect data,
          process payments, or provide legal advice by itself.
        </p>
        <p className="mt-4">
          Before publishing a production site, review your data handling, vendor disclosures, security posture, and
          commercial terms with qualified advisors.
        </p>
      </div>
    </PageFrame>
  )
}

function NotFound() {
  return (
    <PageFrame eyebrow="404" title="This page is not in the grid." text="The route does not exist yet.">
      <Link to="/" className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
        Return home
        <ArrowRight className="h-4 w-4" />
      </Link>
    </PageFrame>
  )
}

function PageFrame({ eyebrow, title, text, children }: { eyebrow: string; title: string; text: string; children: React.ReactNode }) {
  return (
    <section className="min-h-[64vh] border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="mb-10 max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-teal-700">{eyebrow}</div>
          <h1 className="text-balance mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p>
        </div>
        {children}
      </div>
    </section>
  )
}

function DocRow({ title, excerpt }: { title: string; excerpt: string }) {
  const Icon = useMemo(() => {
    if (title.includes('Deployment')) return CloudCog
    if (title.includes('Security')) return ClipboardCheck
    return Terminal
  }, [title])

  return (
    <article className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-5 sm:flex-row sm:items-center">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-teal-50 text-teal-700">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-slate-950">{title}</h3>
        <p className="mt-2 leading-7 text-slate-600">{excerpt}</p>
      </div>
    </article>
  )
}

function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_2fr]">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <LogoMark />
            <span className="text-sm font-bold tracking-wide text-slate-950">{company.name}</span>
          </Link>
          <p className="mt-4 max-w-sm leading-7 text-slate-600">{company.tagline}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          <FooterColumn title="Company" links={[['Products', '/products'], ['Services', '/services'], ['Contact', '/contact']]} />
          <FooterColumn title="Resources" links={[['Docs', '/docs'], ['Blog', '/blog'], ['Changelog', '/changelog']]} />
          <FooterColumn title="Legal" links={[['Privacy', '/privacy'], ['Terms', '/terms']]} />
        </div>
      </div>
      <div className="border-t border-slate-200 px-4 py-5 text-center text-sm text-slate-500">
        Open-source corporate AI website starter. Replace sample brand content before production use.
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <div className="font-semibold text-slate-950">{title}</div>
      <div className="mt-3 grid gap-2">
        {links.map(([label, to]) => (
          <Link key={to} to={to} className="text-sm text-slate-600 transition hover:text-slate-950">
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default App
