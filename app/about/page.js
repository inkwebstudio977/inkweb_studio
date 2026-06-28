// app/about/page.jsx
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// ─── About Hero ──────────────────────────────────────────────────
function AboutHero() {
  return (
    <section className="bg-slate-950 -mt-24 pt-44 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-125 h-125 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
            About Us
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            We are a Studio That
            <br />
            <span className="text-blue-400">Cares About Craft</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
            Founded in Pune in 2020, InkwebStudioz is a boutique digital studio built on one belief: great design and great code are inseparable. We work with startups, growing brands, and ambitious founders to turn their vision into exceptional digital products.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── Story Section ────────────────────────────────────────────────
function StorySection() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative">
            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 relative">
              {/* Timeline blocks */}
              <div className="flex flex-col gap-4">
                {[
                  { year: '2020', event: 'Founded in Pune with a team of 2', color: 'bg-blue-500' },
                  { year: '2021', event: 'Delivered first 10 client projects', color: 'bg-emerald-500' },
                  { year: '2022', event: 'Grew to a team of 6 specialists', color: 'bg-violet-500' },
                  { year: '2023', event: 'Launched our UI component library', color: 'bg-amber-500' },
                  { year: '2024', event: '50+ projects across 8 industries', color: 'bg-blue-400' },
                  { year: '2025', event: 'Expanding to international clients', color: 'bg-emerald-400' },
                ].map(({ year, event, color }) => (
                  <div key={year} className="flex items-start gap-4">
                    <div className={`w-2 h-2 rounded-full ${color} mt-2 flex-shrink-0`} />
                    <div className="flex items-start gap-4">
                      <span className="text-slate-500 text-sm font-bold w-10 flex-shrink-0">{year}</span>
                      <span className="text-slate-300 text-sm">{event}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-xl shadow-blue-500/30">
                Est. 2020
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              Born from a frustration
              <br />
              <span className="text-blue-400">with average work</span>
            </h2>
            <div className="flex flex-col gap-5 text-slate-400 text-base leading-relaxed">
              <p>
                Our founder, Arjun Patil, spent years at a large agency watching great ideas get watered down by slow processes, bloated teams, and a lack of real craftsmanship. He left to build the kind of studio he always wished existed.
              </p>
              <p>
                InkwebStudioz was built to be small on purpose. Boutique. Where every client gets senior-level attention, not a junior developer handed a brief and told to figure it out.
              </p>
              <p>
                Today we are a team of 8 — designers, developers, and strategists who genuinely love making things on the internet. We work remotely across Pune, Bengaluru, and Mumbai, and serve clients across India, the US, and Europe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Values Section ───────────────────────────────────────────────
function ValuesSection() {
  const values = [
    {
      icon: '🎯',
      title: 'Intentional Design',
      desc: "Every pixel has a purpose. We don't add things because they look cool — we add them because they serve your users and your goals.",
    },
    {
      icon: '⚡',
      title: 'Speed Matters',
      desc: "A beautiful website that loads slowly is a failed website. We obsess over performance so your users never have to wait.",
    },
    {
      icon: '🤝',
      title: 'Radical Honesty',
      desc: "We tell you what we actually think. If your idea won't work, we say so — and then we help you find something better.",
    },
    {
      icon: '🔁',
      title: 'Continuous Improvement',
      desc: "We measure, learn, and iterate. A launch isn't the finish line — it's the starting gun.",
    },
  ]

  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            What We Stand For
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">Our Values</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {values.map(({ icon, title, desc }) => (
            <div key={title} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
              <div className="text-3xl mb-5">{icon}</div>
              <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Team Section ─────────────────────────────────────────────────
function TeamSection() {
  const team = [
    { name: 'Arjun Patil', role: 'Founder & Creative Director', initials: 'AP', color: 'bg-blue-500', bio: '8 years in design. Previously at Razorpay. Loves type, coffee, and fast cars.' },
    { name: 'Sneha Kulkarni', role: 'Lead Developer', initials: 'SK', color: 'bg-violet-500', bio: 'Full-stack wizard. Next.js evangelist. Solves problems before you realize they exist.' },
    { name: 'Dev Joshi', role: 'UI/UX Designer', initials: 'DJ', color: 'bg-emerald-500', bio: 'Former product designer at a Y-Combinator startup. User research obsessive.' },
    { name: 'Kavya Nair', role: 'SEO & Growth Lead', initials: 'KN', color: 'bg-amber-500', bio: 'Ranks things. All things. Probably ranks her lunch options on a spreadsheet.' },
  ]

  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            The People
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">Meet the Team</h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto">
            Small enough to care. Experienced enough to deliver.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map(({ name, role, initials, color, bio }) => (
            <div key={name} className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/20 transition-all duration-300 text-center">
              <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center text-white text-xl font-bold mx-auto mb-5`}>
                {initials}
              </div>
              <h3 className="text-white font-bold text-base mb-1">{name}</h3>
              <p className="text-blue-400 text-xs font-medium mb-3">{role}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Stats Section ────────────────────────────────────────────────
function StatsSection() {
  const stats = [
    { value: '50+', label: 'Projects Delivered', sub: 'Across 8 industries' },
    { value: '98%', label: 'Client Retention Rate', sub: 'They keep coming back' },
    { value: '4.9★', label: 'Average Rating', sub: 'Across all platforms' },
    { value: '< 2s', label: 'Avg Page Load Time', sub: 'On all our sites' },
  ]

  return (
    <section className="bg-blue-600 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ value, label, sub }) => (
            <div key={label} className="text-center">
              <p className="text-4xl lg:text-5xl font-black text-white mb-2">{value}</p>
              <p className="text-blue-100 font-semibold text-sm mb-1">{label}</p>
              <p className="text-blue-200/70 text-xs">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Page Export ──────────────────────────────────────────────────
export const metadata = {
  title: 'About — InkwebStudioz',
  description: 'Learn about InkwebStudioz, our story, our team, and what we stand for.',
}

export default function AboutPage() {
  return (
    <main>
      <Header />
      <AboutHero />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <StatsSection />

      {/* CTA */}
      <section className="bg-slate-950 py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-5">
            Want to work with us?
          </h2>
          <p className="text-slate-400 mb-8 text-base leading-relaxed">
            We take on a limited number of new clients each quarter to ensure every project gets our full attention. Lets see if we are a good fit.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-blue-500/20 hover:-translate-y-0.5 text-sm"
          >
            Start the Conversation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}