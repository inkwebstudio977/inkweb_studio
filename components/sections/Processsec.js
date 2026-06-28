// pages/home/ProcessSection.jsx
export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Discovery Call',
      desc: 'We learn about your business, goals, target audience, and project scope in a free 30-min strategy session.',
    },
    {
      num: '02',
      title: 'Strategy & Planning',
      desc: 'We map out your sitemap, user flows, and project timeline — so there are zero surprises later.',
    },
    {
      num: '03',
      title: 'Design & Prototype',
      desc: 'Your brand comes to life in high-fidelity mockups. You review, request changes, and approve before we code.',
    },
    {
      num: '04',
      title: 'Development',
      desc: 'We build your site with clean, scalable code using Next.js and Tailwind CSS — fast, accessible, and SEO-ready.',
    },
    {
      num: '05',
      title: 'Testing & QA',
      desc: 'Every page is tested across browsers, devices, and screen sizes before it touches production.',
    },
    {
      num: '06',
      title: 'Launch & Support',
      desc: 'We go live and provide 30 days of post-launch support to make sure everything runs smoothly.',
    },
  ]

  return (
    <section className="bg-slate-900 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            How We Work
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Our Process
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            A proven 6-step process that delivers predictable results — on time, every time.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map(({ num, title, desc }) => (
            <div
              key={num}
              className="relative bg-slate-950 border border-slate-800 rounded-2xl p-7 hover:border-blue-500/30 transition-all duration-300"
            >
              {/* Number watermark */}
              <span className="absolute top-5 right-6 text-6xl font-black text-white/[0.03] select-none leading-none">
                {num}
              </span>

              <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white text-sm font-bold mb-5 flex-shrink-0">
                {num}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}