// pages/home/CTASection.jsx
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="bg-slate-950 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="relative overflow-hidden bg-blue-600 rounded-3xl px-8 py-16 lg:px-16 lg:py-20 text-center">
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
              backgroundSize: '28px 28px',
            }}
          />

          {/* Glows */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-800/40 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative z-10">
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
              Lets Build Together
            </p>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              Your Next Great Website
              <br />
              Starts with a Conversation.
            </h2>
            <p className="text-blue-100/80 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Free discovery call. No commitment. Just a real chat about your goals and how we can help you get there.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl hover:-translate-y-0.5 text-sm"
              >
                Book a Free Call
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white border border-white/30 hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-sm"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}