// pages/home/TestimonialsSection.jsx
const TESTIMONIALS = [
  {
    quote: "InkwebStudioz completely transformed our online presence. Our conversion rate jumped 3x within two months of the new site going live. Worth every rupee.",
    name: 'Priya Sharma',
    role: 'CEO, FreshCart India',
    initials: 'PS',
    color: 'bg-emerald-500',
    rating: 5,
  },
  {
    quote: "The team's attention to detail is insane. They didn't just build what we asked for — they pushed back with better ideas and the end result blew us away.",
    name: 'Rahul Mehta',
    role: 'Co-founder, TaskFlow',
    initials: 'RM',
    color: 'bg-violet-500',
    rating: 5,
  },
  {
    quote: "Professional, fast, and honest. They delivered 2 weeks ahead of schedule and the post-launch support was incredible. Already planning our next project with them.",
    name: 'Anjali Kapoor',
    role: 'Marketing Head, LuxStay',
    initials: 'AK',
    color: 'bg-blue-500',
    rating: 5,
  },
  {
    quote: "We had tried 3 other agencies before InkwebStudioz. None of them understood our brand. These guys nailed it on the first concept. Highly recommend.",
    name: 'Vikram Singh',
    role: 'Founder, BoldBrands',
    initials: 'VS',
    color: 'bg-amber-500',
    rating: 5,
  },
]

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-900 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Client Love
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            What Our Clients Say
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-base">
            We let results do the talking — but our clients do not stay quiet either.
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {TESTIMONIALS.map(({ quote, name, role, initials, color, rating }) => (
            <div
              key={name}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/20 transition-all duration-300"
            >
              {/* Quote mark */}
              <div className="text-blue-400/20 text-6xl font-serif leading-none mb-4 select-none">&#8220;</div>

              <StarRating count={rating} />

              <p className="text-slate-300 text-base leading-relaxed mt-4 mb-6">
                {quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                  {initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{name}</p>
                  <p className="text-slate-500 text-xs">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}