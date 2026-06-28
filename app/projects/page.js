'use client'
// app/projects/page.jsx
import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const PROJECTS = [
  {
    category: 'E-Commerce',
    title: 'FreshCart — Grocery Delivery Platform',
    desc: 'A full-stack grocery delivery marketplace with real-time inventory tracking, multi-vendor support, and a slick mobile-first checkout experience.',
    tags: ['Next.js', 'Stripe', 'Tailwind', 'MongoDB'],
    color: 'from-emerald-900/50',
    accent: 'text-emerald-400',
    border: 'border-emerald-500/20 hover:border-emerald-400/40',
    year: '2024',
    client: 'FreshCart India',
    url: '#',
  },
  {
    category: 'SaaS',
    title: 'TaskFlow — Project Management Tool',
    desc: 'A Notion-inspired productivity platform with kanban boards, time tracking, team collaboration, and AI-powered task suggestions.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'OpenAI'],
    color: 'from-violet-900/50',
    accent: 'text-violet-400',
    border: 'border-violet-500/20 hover:border-violet-400/40',
    year: '2024',
    client: 'TaskFlow Inc.',
    url: '#',
  },
  {
    category: 'Hospitality',
    title: 'LuxStay — Luxury Hotel Booking',
    desc: 'A visually stunning hotel booking experience with dynamic pricing, loyalty rewards, and an immersive room gallery.',
    tags: ['Next.js', 'Framer Motion', 'Prisma', 'Stripe'],
    color: 'from-amber-900/50',
    accent: 'text-amber-400',
    border: 'border-amber-500/20 hover:border-amber-400/40',
    year: '2023',
    client: 'LuxStay Hotels',
    url: '#',
  },
  {
    category: 'Healthcare',
    title: 'MedBook — Doctor Appointment System',
    desc: 'A patient-facing appointment booking app with smart scheduling, video consultation, and prescription management.',
    tags: ['React', 'Express', 'PostgreSQL', 'Twilio'],
    color: 'from-blue-900/50',
    accent: 'text-blue-400',
    border: 'border-blue-500/20 hover:border-blue-400/40',
    year: '2023',
    client: 'MedBook Health',
    url: '#',
  },
  {
    category: 'Real Estate',
    title: 'PropVista — Property Discovery Platform',
    desc: 'An AI-powered real estate search platform with map-based listings, virtual tours, and EMI calculators.',
    tags: ['Next.js', 'Google Maps', 'Prisma', 'Cloudinary'],
    color: 'from-rose-900/50',
    accent: 'text-rose-400',
    border: 'border-rose-500/20 hover:border-rose-400/40',
    year: '2024',
    client: 'PropVista Realty',
    url: '#',
  },
  {
    category: 'EdTech',
    title: 'LearnLab — Online Learning Platform',
    desc: 'A live classroom platform with video streaming, interactive quizzes, progress tracking, and certificate generation.',
    tags: ['Next.js', 'Socket.io', 'AWS', 'FFmpeg'],
    color: 'from-cyan-900/50',
    accent: 'text-cyan-400',
    border: 'border-cyan-500/20 hover:border-cyan-400/40',
    year: '2023',
    client: 'LearnLab Education',
    url: '#',
  },
  {
    category: 'Agency Website',
    title: 'BoldBrands — Creative Agency Site',
    desc: 'A scroll-driven, animation-heavy portfolio site for a Mumbai-based creative agency. Built for impact, not just aesthetics.',
    tags: ['Next.js', 'GSAP', 'Tailwind', 'Sanity'],
    color: 'from-pink-900/50',
    accent: 'text-pink-400',
    border: 'border-pink-500/20 hover:border-pink-400/40',
    year: '2024',
    client: 'BoldBrands Mumbai',
    url: '#',
  },
  {
    category: 'SaaS',
    title: 'InvoicePro — Billing & Invoicing Tool',
    desc: 'A GST-compliant invoicing solution for Indian freelancers and small businesses with automated reminders and payment tracking.',
    tags: ['React', 'Node.js', 'Razorpay', 'PDFKit'],
    color: 'from-orange-900/50',
    accent: 'text-orange-400',
    border: 'border-orange-500/20 hover:border-orange-400/40',
    year: '2022',
    client: 'InvoicePro',
    url: '#',
  },
]

const CATEGORIES = ['All', 'E-Commerce', 'SaaS', 'Agency Website', 'Hospitality', 'Healthcare', 'Real Estate', 'EdTech']

// ─── Projects Hero ────────────────────────────────────────────────
function ProjectsHero() {
  return (
    <section className="bg-slate-950 -mt-24 pt-44 pb-16 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">Our Work</p>
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Projects We have
            <br />
            <span className="text-blue-400">Poured Our Hearts Into</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
            Every project is a chance to make something great. Here is a selection of the work we <a href="http://"></a>re most proud of — across industries, scales, and technologies.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── Projects Grid with Filters ───────────────────────────────────
function ProjectsGrid() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === active)

  return (
    <section className="bg-slate-950 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-sm px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                active === cat
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                  : 'text-slate-400 bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map(({ category, title, desc, tags, color, accent, border, year, client, url }) => (
            <div
              key={title}
              className={`group relative bg-gradient-to-b ${color} to-slate-900 border ${border} rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col`}
            >
              {/* Browser mock */}
              <div className="w-full h-28 bg-slate-800/50 rounded-xl border border-white/10 mb-5 flex flex-col overflow-hidden">
                <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10">
                  <span className="w-2 h-2 rounded-full bg-red-500/60" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
                  <span className="w-2 h-2 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 p-2.5 flex flex-col gap-1.5">
                  <div className="h-2 bg-white/10 rounded-full w-3/4" />
                  <div className="h-1.5 bg-white/5 rounded-full w-1/2" />
                  <div className="mt-1 grid grid-cols-2 gap-1.5">
                    <div className="h-8 bg-white/5 rounded-lg" />
                    <div className="h-8 bg-white/5 rounded-lg" />
                  </div>
                </div>
              </div>

              <span className={`text-xs font-semibold ${accent} mb-2`}>{category}</span>
              <h3 className="text-white font-bold text-sm leading-snug mb-2">{title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed flex-1 mb-4">{desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {tags.slice(0, 3).map((t) => (
                  <span key={t} className="text-xs text-slate-500 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md">
                    {t}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-slate-500 text-xs">{year} · {client}</span>
                <a
                  href={url}
                  className={`${accent} text-xs font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                >
                  View
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-base">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default function ProjectsPage() {
  return (
    <main>
      <Header />
      <ProjectsHero />
      <ProjectsGrid />

      {/* CTA */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Have a project in mind?</h2>
          <p className="text-slate-400 mb-8">Lets build something you will be proud to show the world.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-blue-500/20 hover:-translate-y-0.5 text-sm"
          >
            Start a Project →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}