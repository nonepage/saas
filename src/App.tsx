import {
  ArrowRight,
  BookOpen,
  Building2,
  Check,
  ChevronRight,
  Code2,
  CreditCard,
  FileText,
  Globe2,
  Languages,
  Menu,
  Moon,
  Network,
  ShieldCheck,
  Sparkles,
  Sun,
  Terminal,
  X,
  Zap,
} from 'lucide-react'
import type { ComponentType } from 'react'
import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'

type Icon = ComponentType<{ className?: string }>
type Lang = 'en' | 'zh'
type Theme = 'light' | 'dark'

const brand = {
  name: 'Spark Gravity',
  company: 'Spark Gravity LLC',
  tagline: 'Enterprise AI Solutions',
  email: 'support@sparkgravity.ai',
  address: '131 Continental Dr Suite 305 Newark, DE, 19713 US',
}

const copy = {
  en: {
    nav: {
      home: 'Home',
      pricing: 'Pricing',
      about: 'About',
      contact: 'Contact',
      docs: 'Docs',
      blog: 'Blog',
      changelog: 'Changelog',
    },
    actions: {
      signIn: 'Sign in',
      buyCredits: 'Buy credits',
      learnMore: 'Learn more',
      back: 'Back',
    },
    home: {
      hero: {
        eyebrow: brand.company,
        title: 'Enterprise AI, built on leading LLMs.',
        subtitle:
          'Spark Gravity delivers AI products and model infrastructure for teams adopting Claude, GPT, Gemini, and private workflows with confidence. Secure, compliant, and ready to scale.',
        primary: 'Buy AI credits',
        secondary: 'Explore our products',
      },
      valuesHeading: 'Why Spark Gravity',
      values: [
        {
          title: 'Compliance-first',
          desc: 'Built with enterprise requirements in mind: auditable orders, verified payments, clear data handling, and policy-ready workflows.',
        },
        {
          title: 'Model-native',
          desc: 'Access leading models through a clean commercial layer, with USD credits and consistent operational controls.',
        },
        {
          title: 'Developer-friendly',
          desc: 'Straightforward docs, stable product surfaces, and integration patterns that help teams move quickly.',
        },
      ],
      productsHeading: 'Our products',
      live: 'Live',
      comingSoon: 'Coming soon',
      products: [
        {
          name: 'Orbit Terminal',
          desc: 'LLM relay for builders: Claude, Codex-style coding agents, Gemini, and more in one controlled workspace.',
          live: true,
        },
        {
          name: 'Gravity Copilot',
          desc: 'A model-powered assistant that connects to internal tools and keeps human approvals in the loop.',
        },
        {
          name: 'Spark Gateway',
          desc: 'Unified API layer with observability, billing controls, rate limits, and security-focused routing.',
        },
      ],
      credits: {
        heading: 'Need AI model credits now?',
        subtitle: 'Prepaid USD credits. Use them across Spark Gravity services as they roll out.',
        button: 'Go to pricing',
      },
    },
    pricing: {
      title: 'AI Model Credits',
      subtitle: 'Prepaid credits in USD. Redeem across Spark Gravity services.',
      tableHeading: 'Model pricing',
      note: 'Prices shown per 1M tokens (USD). Replace the sample figures with your provider list prices before launch.',
      model: 'Model',
      input: 'Input',
      output: 'Output',
      cacheRead: 'Cache read',
      cacheWrite: 'Cache write',
      select: 'Select an amount',
      custom: 'Custom amount (USD)',
      placeholder: '50.00',
      min: 'Minimum $0.50',
      max: 'Maximum $5,000.00',
      whatYouGet: 'What you get',
      included: [
        'USD-denominated credits added to your Spark Gravity balance.',
        'Usable across Spark Gravity products as they become available.',
        'Receipt by email and order history in your account.',
        'Refundable per the published refund policy.',
      ],
    },
    about: {
      heading: 'About Spark Gravity',
      intro: [
        'Spark Gravity LLC is an AI product company focused on bringing leading model capabilities into practical enterprise workflows.',
        'We believe three things matter for adoption at scale: clean interfaces, auditable operations, and predictable billing. Every Spark Gravity product is designed around those principles.',
      ],
      build: 'What we are building',
      contactHeading: 'Contact',
      contactLead: 'Business, support, or general questions:',
    },
    contact: {
      heading: 'Contact us',
      subtitle: 'Questions, feedback, or interested in partnering? We would love to hear from you.',
      email: 'Email',
      company: 'Company',
      address: 'Registered address',
      addressSub: 'United States · Delaware LLC',
      response: 'We typically respond within 2 business days.',
    },
    docs: {
      heading: 'Docs',
      subtitle: 'Implementation notes, product guides, and trust-center references for Spark Gravity services.',
      empty: 'Documentation is being prepared. Check back soon for integration guides and API references.',
    },
    blog: {
      heading: 'Blog',
      subtitle: 'Company updates, AI operations notes, and practical guidance for enterprise model adoption.',
      empty: 'No posts yet.',
    },
    changelog: {
      heading: 'Changelog',
      subtitle: 'Product updates and release notes.',
      empty: 'No changelog entries yet.',
    },
    legal: {
      terms: 'Terms of Service',
      privacy: 'Privacy Policy',
      refund: 'Refund Policy',
    },
    footer: {
      rights: 'All rights reserved.',
      legal: 'Legal',
      product: 'Product',
      resources: 'Resources',
      powered: 'Payments secured by Stripe',
    },
  },
  zh: {
    nav: {
      home: '首页',
      pricing: '价格',
      about: '关于我们',
      contact: '联系我们',
      docs: '文档',
      blog: '博客',
      changelog: '更新日志',
    },
    actions: {
      signIn: '登录',
      buyCredits: '购买额度',
      learnMore: '了解更多',
      back: '返回',
    },
    home: {
      hero: {
        eyebrow: brand.company,
        title: '构建于多种大模型之上的企业 AI 平台。',
        subtitle:
          'Spark Gravity 为企业 AI 落地提供产品与模型基础设施，支持 Claude、GPT、Gemini 与私有工作流。安全、合规、可扩展。',
        primary: '购买 AI 额度',
        secondary: '了解我们的产品',
      },
      valuesHeading: '为什么选择 Spark Gravity',
      values: [
        {
          title: '合规优先',
          desc: '面向企业需求设计：可审计订单、可靠支付、清晰的数据处理与可落地的策略流程。',
        },
        {
          title: '模型原生',
          desc: '通过清晰的商业层接入主流模型，以美元额度和统一运营控制管理使用。',
        },
        {
          title: '对开发者友好',
          desc: '清晰文档、稳定产品边界与可复制的集成模式，帮助团队快速推进。',
        },
      ],
      productsHeading: '我们的产品',
      live: '在线',
      comingSoon: '即将推出',
      products: [
        {
          name: 'Orbit Terminal',
          desc: '面向开发者的大模型中转工作台：Claude、代码代理、Gemini 等一站接入。',
          live: true,
        },
        {
          name: 'Gravity Copilot',
          desc: '连接内部工具的模型助手，并保留关键节点的人类审批。',
        },
        {
          name: 'Spark Gateway',
          desc: '统一 API 层，内置观测、计费控制、限流与安全路由。',
        },
      ],
      credits: {
        heading: '现在就需要 AI 模型额度？',
        subtitle: '美元预付费额度。可在 Spark Gravity 服务上线后跨产品使用。',
        button: '前往价格页',
      },
    },
    pricing: {
      title: 'AI 模型额度',
      subtitle: '美元预付费额度，可在 Spark Gravity 各项服务中使用。',
      tableHeading: '模型价格',
      note: '单价为每 100 万 tokens（美元）。上线前请替换为实际服务商价格。',
      model: '模型',
      input: '输入',
      output: '输出',
      cacheRead: '缓存读',
      cacheWrite: '缓存写',
      select: '选择金额',
      custom: '自定义金额（美元）',
      placeholder: '50.00',
      min: '最少 $0.50',
      max: '最多 $5,000.00',
      whatYouGet: '你将获得',
      included: [
        '以美元计价的额度将充值到 Spark Gravity 余额。',
        '随 Spark Gravity 产品上线，可跨产品消费。',
        '邮件收据与账户订单记录。',
        '按照公开退款政策可申请退款。',
      ],
    },
    about: {
      heading: '关于 Spark Gravity',
      intro: [
        'Spark Gravity LLC 专注于将主流模型能力带入真实企业工作流。',
        '我们相信规模化 AI 落地需要三件事：清晰接口、可审计流程和可预期账单。Spark Gravity 的产品围绕这些原则设计。',
      ],
      build: '我们在做什么',
      contactHeading: '联系我们',
      contactLead: '商务、支持或一般咨询：',
    },
    contact: {
      heading: '联系我们',
      subtitle: '有问题、反馈或想聊合作？欢迎随时来信。',
      email: '邮箱',
      company: '公司',
      address: '注册地址',
      addressSub: '美国 · Delaware LLC',
      response: '我们通常在 2 个工作日内回复。',
    },
    docs: {
      heading: '文档',
      subtitle: 'Spark Gravity 服务的集成说明、产品指南与信任中心资料。',
      empty: '文档正在准备中。稍后将提供集成指南与 API 参考。',
    },
    blog: {
      heading: '博客',
      subtitle: '公司更新、AI 运营笔记与企业模型采用实践。',
      empty: '暂无文章。',
    },
    changelog: {
      heading: '更新日志',
      subtitle: '产品更新与发布说明。',
      empty: '暂无更新日志。',
    },
    legal: {
      terms: '服务条款',
      privacy: '隐私政策',
      refund: '退款政策',
    },
    footer: {
      rights: '保留所有权利。',
      legal: '法律条款',
      product: '产品',
      resources: '资源',
      powered: '支付由 Stripe 安全处理',
    },
  },
}

const pricingRows = [
  ['Claude 3.5 Sonnet', '$3.00', '$15.00', '$0.30', '$3.75'],
  ['GPT-4.1', '$2.00', '$8.00', '$0.50', '-'],
  ['Gemini 2.5 Pro', '$1.25', '$10.00', '$0.31', '$4.50'],
  ['DeepSeek Reasoner', '$0.55', '$2.19', '$0.14', '-'],
]

function App() {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem('lang') as Lang) || 'en')
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('theme') as Theme) || 'light')
  const t = copy[lang]

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollToTop />
      <Header t={t} lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
      <main>
        <Routes>
          <Route path="/" element={<Home t={t} />} />
          <Route path="/pricing" element={<Pricing t={t} />} />
          <Route path="/about" element={<About t={t} />} />
          <Route path="/contact" element={<Contact t={t} />} />
          <Route path="/docs" element={<EmptyPage icon={BookOpen} title={t.docs.heading} subtitle={t.docs.subtitle} empty={t.docs.empty} />} />
          <Route path="/blog" element={<EmptyPage icon={FileText} title={t.blog.heading} subtitle={t.blog.subtitle} empty={t.blog.empty} />} />
          <Route path="/changelog" element={<EmptyPage icon={Zap} title={t.changelog.heading} subtitle={t.changelog.subtitle} empty={t.changelog.empty} />} />
          <Route path="/terms" element={<PolicyPage title={t.legal.terms} t={t} />} />
          <Route path="/privacy" element={<PolicyPage title={t.legal.privacy} t={t} />} />
          <Route path="/refund" element={<PolicyPage title={t.legal.refund} t={t} />} />
          <Route path="*" element={<NotFound t={t} />} />
        </Routes>
      </main>
      <Footer t={t} />
    </div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function Header({
  t,
  lang,
  setLang,
  theme,
  setTheme,
}: {
  t: (typeof copy)['en']
  lang: Lang
  setLang: (lang: Lang) => void
  theme: Theme
  setTheme: (theme: Theme) => void
}) {
  const [open, setOpen] = useState(false)
  const nav = [
    ['/', t.nav.home],
    ['/pricing', t.nav.pricing],
    ['/about', t.nav.about],
    ['/contact', t.nav.contact],
    ['/docs', t.nav.docs],
    ['/blog', t.nav.blog],
    ['/changelog', t.nav.changelog],
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/75 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <BrandLogo />
          <span className="font-semibold tracking-tight">{brand.name}</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                }`
              }
              end={to === '/'}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <IconButton label="language" onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}>
            <Languages className="h-4 w-4" />
            <span className="text-xs">{lang === 'en' ? '中文' : 'EN'}</span>
          </IconButton>
          <IconButton label="theme" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </IconButton>
          <a href="/oauth/login" className="rounded-md border border-input px-3 py-2 text-sm font-medium hover:bg-accent">
            {t.actions.signIn}
          </a>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-input md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background px-4 py-3 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-1">
            {nav.map(([to, label]) => (
              <Link key={to} to={to} className="rounded-md px-3 py-3 text-sm font-medium" onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <div className="flex gap-2 px-3 py-2">
              <IconButton label="language" onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}>
                <Languages className="h-4 w-4" />
                <span className="text-xs">{lang === 'en' ? '中文' : 'EN'}</span>
              </IconButton>
              <IconButton label="theme" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </IconButton>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function IconButton({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="inline-flex h-9 items-center gap-1.5 rounded-md border border-input px-2.5 text-sm hover:bg-accent"
    >
      {children}
    </button>
  )
}

function BrandLogo() {
  return <img src="/logo.svg" alt="Spark Gravity logo" className="h-9 w-9 rounded-md" />
}

function Home({ t }: { t: (typeof copy)['en'] }) {
  const valueIcons = [ShieldCheck, Sparkles, Code2]
  const productIcons = [Terminal, Network, Globe2]

  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-accent/40 to-background">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">{t.home.hero.eyebrow}</div>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-5xl">{t.home.hero.title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{t.home.hero.subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/pricing">
              {t.home.hero.primary}
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink to="#products" variant="outline">
              {t.home.hero.secondary}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="mb-10 text-2xl font-semibold tracking-tight md:text-3xl">{t.home.valuesHeading}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {t.home.values.map((item, index) => (
            <Card key={item.title}>
              <IconBox icon={valueIcons[index]} />
              <h3 className="mb-2 font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="products" className="border-t border-border bg-accent/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="mb-10 text-2xl font-semibold tracking-tight md:text-3xl">{t.home.productsHeading}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {t.home.products.map((product, index) => (
              <Card key={product.name} className="bg-card">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <IconBox icon={productIcons[index]} />
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${product.live ? 'bg-emerald-600 text-white' : 'bg-secondary text-secondary-foreground'}`}>
                    {product.live ? t.home.live : t.home.comingSoon}
                  </span>
                </div>
                <h3 className="mb-2 font-semibold">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-lg border border-dashed border-border/70 bg-muted/40 p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">{t.home.credits.heading}</h2>
              <p className="mt-3 text-muted-foreground">{t.home.credits.subtitle}</p>
            </div>
            <ButtonLink to="/pricing">
              {t.home.credits.button}
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}

function Pricing({ t }: { t: (typeof copy)['en'] }) {
  const tiers = ['$10', '$50', '$100', '$500']
  const [selected, setSelected] = useState('$50')

  return (
    <PageShell title={t.pricing.title} subtitle={t.pricing.subtitle}>
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Card>
          <h2 className="mb-2 text-xl font-semibold">{t.pricing.tableHeading}</h2>
          <p className="mb-6 text-sm text-muted-foreground">{t.pricing.note}</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                  <th className="p-3">{t.pricing.model}</th>
                  <th className="p-3">{t.pricing.input}</th>
                  <th className="p-3">{t.pricing.output}</th>
                  <th className="p-3">{t.pricing.cacheRead}</th>
                  <th className="p-3">{t.pricing.cacheWrite}</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row) => (
                  <tr key={row[0]} className="border-b border-border last:border-0">
                    {row.map((cell) => (
                      <td key={cell} className="p-3">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        <div className="space-y-6">
          <Card>
            <h2 className="mb-4 font-semibold">{t.pricing.select}</h2>
            <div className="grid grid-cols-2 gap-3">
              {tiers.map((tier) => (
                <button
                  key={tier}
                  type="button"
                  onClick={() => setSelected(tier)}
                  className={`rounded-md border px-4 py-3 text-left text-sm font-semibold transition ${
                    selected === tier ? 'border-primary bg-primary text-primary-foreground' : 'border-input hover:bg-accent'
                  }`}
                >
                  {tier}
                </button>
              ))}
            </div>
            <label className="mt-5 block text-sm font-medium">
              {t.pricing.custom}
              <input className="mt-2 h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder={t.pricing.placeholder} />
            </label>
            <div className="mt-2 flex justify-between text-xs text-muted-foreground">
              <span>{t.pricing.min}</span>
              <span>{t.pricing.max}</span>
            </div>
            <ButtonLink to="/pricing" className="mt-5 w-full justify-center">
              {t.actions.buyCredits}
            </ButtonLink>
          </Card>
          <Card>
            <h2 className="mb-4 font-semibold">{t.pricing.whatYouGet}</h2>
            <ul className="space-y-3">
              {t.pricing.included.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </PageShell>
  )
}

function About({ t }: { t: (typeof copy)['en'] }) {
  const products = copy.en.home.products
  return (
    <PageShell title={t.about.heading} subtitle="">
      <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
        <div className="space-y-4 text-muted-foreground">
          {t.about.intro.map((paragraph) => (
            <p key={paragraph} className="leading-8">
              {paragraph}
            </p>
          ))}
          <div className="pt-4">
            <h2 className="mb-4 text-xl font-semibold text-foreground">{t.about.contactHeading}</h2>
            <p>
              {t.about.contactLead}{' '}
              <a className="font-medium text-primary hover:underline" href={`mailto:${brand.email}`}>
                {brand.email}
              </a>
            </p>
          </div>
        </div>
        <Card>
          <h2 className="mb-5 text-xl font-semibold">{t.about.build}</h2>
          <div className="space-y-4">
            {products.map((product) => (
              <div key={product.name} className="rounded-md border border-border p-4">
                <div className="font-semibold">{product.name}</div>
                <p className="mt-2 text-sm text-muted-foreground">{product.desc}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </PageShell>
  )
}

function Contact({ t }: { t: (typeof copy)['en'] }) {
  return (
    <PageShell title={t.contact.heading} subtitle={t.contact.subtitle}>
      <div className="grid gap-6 md:grid-cols-3">
        <ContactCard icon={CreditCard} label={t.contact.email} value={brand.email} href={`mailto:${brand.email}`} />
        <ContactCard icon={Building2} label={t.contact.company} value={brand.company} />
        <ContactCard icon={Globe2} label={t.contact.address} value={brand.address} sub={t.contact.addressSub} />
      </div>
      <p className="mt-6 text-sm text-muted-foreground">{t.contact.response}</p>
    </PageShell>
  )
}

function EmptyPage({ icon: Icon, title, subtitle, empty }: { icon: Icon; title: string; subtitle: string; empty: string }) {
  return (
    <PageShell title={title} subtitle={subtitle}>
      <Card className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <p className="text-muted-foreground">{empty}</p>
      </Card>
    </PageShell>
  )
}

function PolicyPage({ title, t }: { title: string; t: (typeof copy)['en'] }) {
  return (
    <PageShell title={title} subtitle="">
      <Card>
        <div className="prose max-w-none text-muted-foreground">
          <p>
            {brand.name} provides this sample public page as part of the website template. Replace this placeholder with
            reviewed policy language before production use.
          </p>
          <p className="mt-4">
            For support questions, contact{' '}
            <a className="text-primary hover:underline" href={`mailto:${brand.email}`}>
              {brand.email}
            </a>
            .
          </p>
          <Link to="/" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
            {t.actions.back}
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </Card>
    </PageShell>
  )
}

function NotFound({ t }: { t: (typeof copy)['en'] }) {
  return (
    <PageShell title="404" subtitle="Page not found.">
      <ButtonLink to="/">{t.actions.back}</ButtonLink>
    </PageShell>
  )
}

function PageShell({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto min-h-[65vh] max-w-6xl px-4 py-14 sm:px-6 md:py-20">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>}
      </div>
      {children}
    </section>
  )
}

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-lg border border-dashed border-border/70 bg-card p-6 text-card-foreground ${className}`}>{children}</div>
}

function IconBox({ icon: Icon }: { icon: Icon }) {
  return (
    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
      <Icon className="h-5 w-5" />
    </div>
  )
}

function ButtonLink({ to, children, variant = 'default', className = '' }: { to: string; children: React.ReactNode; variant?: 'default' | 'outline'; className?: string }) {
  const base = 'inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition-colors'
  const styles =
    variant === 'outline'
      ? 'border border-input bg-background text-foreground hover:bg-accent'
      : 'bg-primary text-primary-foreground hover:bg-primary/90'

  if (to.startsWith('#')) {
    return (
      <a href={to} className={`${base} ${styles} ${className}`}>
        {children}
      </a>
    )
  }

  return (
    <Link to={to} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  )
}

function ContactCard({ icon: Icon, label, value, sub, href }: { icon: Icon; label: string; value: string; sub?: string; href?: string }) {
  const content = (
    <Card className="h-full">
      <IconBox icon={Icon} />
      <div className="text-sm font-medium text-muted-foreground">{label}</div>
      <div className="mt-2 font-semibold">{value}</div>
      {sub && <div className="mt-1 text-sm text-muted-foreground">{sub}</div>}
    </Card>
  )

  return href ? <a href={href}>{content}</a> : content
}

function Footer({ t }: { t: (typeof copy)['en'] }) {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.4fr_2fr]">
        <div>
          <div className="flex items-center gap-3">
            <BrandLogo />
            <div>
              <div className="font-semibold">{brand.company}</div>
              <div className="text-sm text-muted-foreground">{brand.tagline}</div>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">{brand.address}</p>
          <p className="mt-2 text-sm text-muted-foreground">{t.footer.powered}</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          <FooterColumn title={t.footer.product} links={[['Pricing', '/pricing'], ['About', '/about'], ['Contact', '/contact']]} />
          <FooterColumn title={t.footer.resources} links={[['Docs', '/docs'], ['Blog', '/blog'], ['Changelog', '/changelog']]} />
          <FooterColumn title={t.footer.legal} links={[['Terms', '/terms'], ['Privacy', '/privacy'], ['Refund', '/refund']]} />
        </div>
      </div>
      <div className="border-t border-border px-4 py-5 text-center text-sm text-muted-foreground">
        © 2026 {brand.company}. {t.footer.rights}
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h3 className="font-semibold">{title}</h3>
      <div className="mt-3 grid gap-2">
        {links.map(([label, to]) => (
          <Link key={to} to={to} className="text-sm text-muted-foreground hover:text-foreground">
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default App
