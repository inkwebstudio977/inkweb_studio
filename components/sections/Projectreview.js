// pages/home/ProjectsPreview.jsx
import Link from 'next/link'

const PROJECTS = [
  {
    category: 'E-Commerce',
    title: 'FreshCart — Grocery Delivery Platform',
    desc: 'A full-stack grocery delivery app with real-time inventory, multi-vendor support, and a slick mobile-first checkout.',
    tags: ['Next.js', 'Stripe', 'Tailwind', 'MongoDB'],
    color: 'from-emerald-900/40 to-slate-900',
    accentColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/20',
  },
  {
    category: 'SaaS',
    title: 'TaskFlow — Project Management Tool',
    desc: 'A Notion-inspired productivity app with kanban boards, time tracking, and AI-powered task suggestions.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'OpenAI'],
    color: 'from-violet-900/40 to-slate-900',
    accentColor: 'text-violet-400',
    borderColor: 'border-violet-500/20',
  },
  {
    category: 'Agency Website',
    title: 'LuxStay — Luxury Hotel Booking',
    desc: 'A visually stunning hotel booking experience with 3D room tours, dynamic pricing, and loyalty programs.',
    tags: ['Next.js', 'Framer Motion', 'Prisma', 'Stripe'],
    color: 'from-amber-900/40 to-slate-900',
    accentColor: 'text-amber-400',
    borderColor: 'border-amber-500/20',
  },
]

export default function ProjectsPreview() {
  return (
    <section className="bg-slate-950 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Our Work
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Projects We are
              <br />
              <span className="text-blue-400">Proud Of</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="self-start lg:self-auto inline-flex items-center gap-2 text-sm text-blue-400 font-medium border border-blue-400/30 hover:bg-blue-500/10 px-5 py-2.5 rounded-xl transition-all duration-200"
          >
            View all projects
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PROJECTS.map(({ category, title, desc, tags, color, accentColor, borderColor }) => (
            <div
              key={title}
              className={`group relative bg-gradient-to-b ${color} border ${borderColor} rounded-2xl p-7 overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl cursor-pointer`}
            >
              {/* Category */}
              <span className={`inline-block text-xs font-semibold ${accentColor} bg-white/5 border border-white/10 px-3 py-1 rounded-full mb-5`}>
                {category}
              </span>

              {/* Mock browser window */}
              <div className="w-full h-36 bg-slate-800/60 rounded-xl border border-white/10 mb-6 flex flex-col overflow-hidden">
                <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-white/10 bg-slate-800/40">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 p-3 flex flex-col gap-2">
                  <div className="h-2.5 bg-white/10 rounded-full w-3/4" />
                  <div className="h-2 bg-white/5 rounded-full w-1/2" />
                  <div className="mt-1 grid grid-cols-3 gap-2">
                    <div className="h-12 bg-white/5 rounded-lg" />
                    <div className="h-12 bg-white/5 rounded-lg" />
                    <div className="h-12 bg-white/5 rounded-lg" />
                  </div>
                </div>
              </div>

              <h3 className="text-white font-bold text-base lg:text-lg leading-snug mb-3">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{desc}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="text-xs text-slate-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}