// app/services/page.jsx
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const SERVICES_DETAIL = [
  {
    id: 'web-design',
    tag: 'Design',
    tagColor: 'text-blue-400 bg-blue-500/10 border-blue-400/20',
    title: 'Web Design',
    headline: 'Designs That Convert, Not Just Impress',
    desc: 'We design websites that are beautiful and purposeful. Every layout, colour choice, and typographic decision is made with your business goal in mind — whether that is signups, sales, or building trust.',
    features: [
      'Custom brand-aligned design systems',
      'Mobile-first responsive layouts',
      'High-fidelity Figma prototypes',
      'Interaction design & micro-animations',
      'Accessibility (WCAG 2.1 AA compliant)',
      'Dark/light mode variants',
    ],
    deliverables: 'Figma design files, style guide, and handoff specs.',
    timeline: '1–2 weeks',
    startingAt: '₹25,000',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    id: 'web-development',
    tag: 'Development',
    tagColor: 'text-violet-400 bg-violet-500/10 border-violet-400/20',
    title: 'Web Development',
    headline: 'Fast, Scalable, Production-Grade Code',
    desc: 'We build with Next.js, React, and Node.js — the same stack used by companies like Vercel, Airbnb, and Netflix. Clean, maintainable code that your team can actually work with long after we\'re done.',
    features: [
      'Next.js 14 App Router architecture',
      'REST & GraphQL API development',
      'Database design (PostgreSQL, MongoDB)',
      'Authentication & authorization',
      'Third-party integrations (Stripe, CMS, etc.)',
      'CI/CD pipeline & deployment setup',
    ],
    deliverables: 'Full source code, documentation, and deployment.',
    timeline: '2–6 weeks',
    startingAt: '₹40,000',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    id: 'ui-ux',
    tag: 'Experience',
    tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-400/20',
    title: 'UI/UX Design',
    headline: 'Design That Feels Right for Users',
    desc: 'Great UX is invisible — users just know it works. We conduct real user research, map user journeys, and design interfaces that reduce friction, increase engagement, and make people actually want to come back.',
    features: [
      'User research & persona development',
      'User journey & flow mapping',
      'Wireframing & low-fi prototyping',
      'Usability testing & iteration',
      'Design system creation',
      'Conversion rate optimisation (CRO)',
    ],
    deliverables: 'Research report, journey maps, wireframes, and prototype.',
    timeline: '1–3 weeks',
    startingAt: '₹30,000',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-3 3h3" />
      </svg>
    ),
  },
  {
    id: 'seo',
    tag: 'Growth',
    tagColor: 'text-amber-400 bg-amber-500/10 border-amber-400/20',
    title: 'SEO Optimization',
    headline: 'Rank Higher. Get Found. Grow Organically.',
    desc: 'We handle every layer of SEO — from technical audits and Core Web Vitals to content strategy and link building. Sustainable organic growth that doesn\'t disappear when you stop paying for ads.',
    features: [
      'Technical SEO audit & fixes',
      'Core Web Vitals optimization',
      'On-page SEO & structured data',
      'Keyword research & content strategy',
      'Local SEO for Indian businesses',
      'Monthly performance reporting',
    ],
    deliverables: 'Audit report, fix log, and monthly ranking reports.',
    timeline: 'Ongoing (min 3 months)',
    startingAt: '₹15,000/mo',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z" />
      </svg>
    ),
  },
  {
    id: 'ecommerce',
    tag: 'Commerce',
    tagColor: 'text-rose-400 bg-rose-500/10 border-rose-400/20',
    title: 'E-Commerce Development',
    headline: 'Stores Built to Sell',
    desc: 'Custom e-commerce solutions that look incredible and convert visitors into buyers. From single-product landing pages to multi-vendor marketplaces — we build it all.',
    features: [
      'Custom Shopify & Next.js Commerce builds',
      'Stripe, Razorpay & PayU integration',
      'Product catalogue & inventory management',
      'Cart, wishlist & checkout optimization',
      'GST-compliant invoicing system',
      'Performance-optimized product pages',
    ],
    deliverables: 'Live store, admin panel access, and documentation.',
    timeline: '3–8 weeks',
    startingAt: '₹60,000',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016 2.993 2.993 0 002.25-1.016 3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
      </svg>
    ),
  },
  {
    id: 'branding',
    tag: 'Branding',
    tagColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-400/20',
    title: 'Brand Identity',
    headline: 'Look Like a Brand, Not a Business',
    desc: 'A strong visual identity is the foundation everything else is built on. We develop brand systems that are distinctive, scalable, and deeply intentional — so your brand looks great everywhere it shows up.',
    features: [
      'Logo design (primary + variants)',
      'Color palette & typography system',
      'Brand voice & messaging guide',
      'Business card & stationery design',
      'Social media kit',
      'Brand guidelines document',
    ],
    deliverables: 'Brand guidelines PDF, all source files (AI, SVG, PNG).',
    timeline: '1–2 weeks',
    startingAt: '₹20,000',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
      </svg>
    ),
  },
]

// ─── Services Hero ────────────────────────────────────────────────
function ServicesHero() {
  return (
    <section className="bg-slate-950 -mt-24 pt-44 pb-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-3xl -translate-x-1/2" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 text-center">
        <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
          Services
        </p>
        <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
          Everything You Need to
          <br />
          <span className="text-blue-400">Win Online</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          From design and development to SEO and branding — we provide the complete toolkit to build, launch, and grow your digital presence.
        </p>
      </div>
    </section>
  )
}

// ─── Service Cards ─────────────────────────────────────────────────
function ServicesList() {
  return (
    <section className="bg-slate-950 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col gap-8">
          {SERVICES_DETAIL.map(({ id, tag, tagColor, title, headline, desc, features, deliverables, timeline, startingAt, icon }) => (
            <div
              key={id}
              id={id}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-10 hover:border-blue-500/20 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400">
                      {icon}
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${tagColor}`}>
                      {tag}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
                  <h3 className="text-blue-400 font-medium text-base mb-4">{headline}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{desc}</p>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {features.map((f) => (
                      <div key={f} className="flex items-start gap-2.5">
                        <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="text-slate-300 text-sm">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Meta */}
                <div className="flex flex-col gap-4">
                  <div className="bg-slate-950 border border-slate-700 rounded-2xl p-6 flex flex-col gap-5">
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Starting at</p>
                      <p className="text-white text-2xl font-bold">{startingAt}</p>
                    </div>
                    <div className="h-px bg-slate-800" />
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Timeline</p>
                      <p className="text-white text-sm font-semibold">{timeline}</p>
                    </div>
                    <div className="h-px bg-slate-800" />
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Deliverables</p>
                      <p className="text-slate-300 text-xs leading-relaxed">{deliverables}</p>
                    </div>
                    <Link
                      href={`/contact?service=${id}`}
                      className="mt-2 block w-full text-center text-sm font-semibold text-white bg-blue-500 hover:bg-blue-400 px-5 py-3 rounded-xl transition-all duration-200"
                    >
                      Get a Quote →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Pricing Packages ─────────────────────────────────────────────
function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: '₹35,000',
      desc: 'Perfect for small businesses launching their first website.',
      features: ['Up to 5 pages', 'Mobile-responsive design', 'Contact form', 'Basic SEO setup', 'Google Analytics', '2 rounds of revisions', '7-day delivery'],
      cta: 'Get Started',
      highlight: false,
    },
    {
      name: 'Growth',
      price: '₹80,000',
      desc: 'For growing brands that need a full-featured web presence.',
      features: ['Up to 15 pages', 'Custom UI/UX design', 'CMS integration', 'Full SEO setup', 'Blog + newsletter', 'Unlimited revisions', '14-day delivery', 'Priority support'],
      cta: 'Most Popular',
      highlight: true,
    },
    {
      name: 'Scale',
      price: 'Custom',
      desc: 'Enterprise-grade solutions for complex projects.',
      features: ['Unlimited pages', 'Custom web app', 'API integrations', 'E-commerce capable', 'Advanced analytics', 'Dedicated PM', 'SLA-backed support'],
      cta: 'Contact Us',
      highlight: false,
    },
  ]

  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">Simple, Transparent Pricing</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">No hidden fees. No surprises. Just great work at fair prices.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {plans.map(({ name, price, desc, features, cta, highlight }) => (
            <div
              key={name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                highlight
                  ? 'bg-blue-600 border-2 border-blue-400'
                  : 'bg-slate-950 border border-slate-800'
              }`}
            >
              {highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-blue-600 text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-1 ${highlight ? 'text-white' : 'text-white'}`}>{name}</h3>
                <p className={`text-4xl font-black mb-2 ${highlight ? 'text-white' : 'text-white'}`}>{price}</p>
                <p className={`text-sm ${highlight ? 'text-blue-100' : 'text-slate-400'}`}>{desc}</p>
              </div>

              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${highlight ? 'text-blue-200' : 'text-blue-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className={`text-sm ${highlight ? 'text-blue-50' : 'text-slate-300'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`block w-full text-center text-sm font-bold py-3.5 rounded-xl transition-all duration-200 ${
                  highlight
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-500 text-white hover:bg-blue-400'
                }`}
              >
                {cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const metadata = {
  title: 'Services — InkwebStudioz',
  description: 'Web design, development, UI/UX, SEO, branding, and e-commerce services from InkwebStudioz.',
}

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <ServicesHero />
      <ServicesList />
      <PricingSection />

      {/* FAQ Teaser & CTA */}
      <section className="bg-slate-950 py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Not sure which service you need?</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Book a free 30-minute discovery call and we will help you figure out exactly what your project requires — no sales pitch, just honest advice.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-blue-500/20 hover:-translate-y-0.5 text-sm"
          >
            Book a Free Discovery Call →
          </Link>
        </div>
      </section>
      <Footer />
    </main>

  )
}