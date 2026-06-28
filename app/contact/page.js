'use client'
// app/contact/page.jsx
import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const SERVICES = [
  'Web Design',
  'Web Development',
  'UI/UX Design',
  'SEO Optimization',
  'E-Commerce',
  'Brand Identity',
  'Other / Not Sure',
]

const BUDGETS = [
  'Under ₹25,000',
  '₹25,000 – ₹50,000',
  '₹50,000 – ₹1,00,000',
  '₹1,00,000 – ₹2,50,000',
  '₹2,50,000+',
]

// ─── Contact Form ─────────────────────────────────────────────────
function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    timeline: '',
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.service) e.service = 'Please select a service'
    if (!form.message.trim()) e.message = 'Tell us about your project'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed");
      }

      setStatus("success");

      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        message: "",
        timeline: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-slate-900 border  border-slate-800 rounded-3xl p-10 lg:p-12 flex flex-col items-center justify-center text-center min-h-[500px]">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
          <svg className="w-7 h-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-white text-2xl font-bold mb-3">Message Sent!</h3>
        <p className="text-slate-400 max-w-sm leading-relaxed">
          Thanks, <span className="text-white font-medium">{form.name}</span>! We have received your message and will get back to you within 24 hours.
        </p>
        <button
          onClick={() => { setStatus('idle'); setForm({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '', timeline: '' }) }}
          className="mt-8 text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-10">
      <h2 className="text-2xl font-bold text-white mb-7">Tell Us About Your Project</h2>

      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-2">
            Your Name <span className="text-blue-400">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Arjun Patil"
            className={`w-full bg-slate-950 border ${errors.name ? 'border-red-500/60' : 'border-slate-700'} text-white placeholder:text-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all`}
          />
          {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-2">
            Email Address <span className="text-blue-400">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="arjun@company.com"
            className={`w-full bg-slate-950 border ${errors.email ? 'border-red-500/60' : 'border-slate-700'} text-white placeholder:text-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all`}
          />
          {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
        </div>
      </div>

      {/* Phone + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full bg-slate-950 border border-slate-700 text-white placeholder:text-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
          />
        </div>
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-2">Company / Brand Name</label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Awesome Startup Pvt Ltd"
            className="w-full bg-slate-950 border border-slate-700 text-white placeholder:text-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
          />
        </div>
      </div>

      {/* Service + Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-2">
            Service Needed <span className="text-blue-400">*</span>
          </label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className={`w-full bg-slate-950 border ${errors.service ? 'border-red-500/60' : 'border-slate-700'} text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all ${form.service ? 'text-white' : 'text-slate-600'}`}
          >
            <option value="" disabled>Select a service…</option>
            {SERVICES.map((s) => <option key={s} value={s} className="text-white bg-slate-900">{s}</option>)}
          </select>
          {errors.service && <p className="text-red-400 text-xs mt-1.5">{errors.service}</p>}
        </div>
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-2">Estimated Budget</label>
          <select
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className={`w-full bg-slate-950 border border-slate-700 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all ${form.budget ? 'text-white' : 'text-slate-600'}`}
          >
            <option value="" disabled>Select a range…</option>
            {BUDGETS.map((b) => <option key={b} value={b} className="text-white bg-slate-900">{b}</option>)}
          </select>
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-5">
        <label className="block text-slate-300 text-sm font-medium mb-2">When do you need this done?</label>
        <div className="flex flex-wrap gap-2">
          {['ASAP', '1–2 months', '3–6 months', 'Flexible'].map((t) => (
            <button
              type="button"
              key={t}
              onClick={() => setForm((prev) => ({ ...prev, timeline: t }))}
              className={`text-sm px-4 py-2 rounded-xl border transition-all duration-200 ${form.timeline === t
                ? 'bg-blue-500 border-blue-400 text-white'
                : 'border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white'
                }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Message */}
      <div className="mb-7">
        <label className="block text-slate-300 text-sm font-medium mb-2">
          Tell us about your project <span className="text-blue-400">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Describe your project, goals, and any requirements. The more detail, the better!"
          className={`w-full bg-slate-950 border ${errors.message ? 'border-red-500/60' : 'border-slate-700'} text-white placeholder:text-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all resize-none`}
        />
        {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-blue-500 hover:bg-blue-400 disabled:bg-blue-500/50 text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-xl shadow-blue-500/20 hover:-translate-y-0.5 disabled:translate-y-0 text-sm flex items-center justify-center gap-2"
      >
        {status === 'submitting' ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending…
          </>
        ) : (
          <>
            Send Message
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </>
        )}
      </button>

      <p className="text-slate-600 text-xs text-center mt-4">
        We respond to all enquiries within 24 hours. Your info is never shared with third parties.
      </p>
    </form>
  )
}

// ─── Contact Info Sidebar ─────────────────────────────────────────
function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      {/* Quick info */}
      <div className="bg-slate-900 border  border-slate-800 rounded-2xl p-7">
        <h3 className="text-white font-bold text-lg mb-5">Contact Details</h3>
        <div className="flex flex-col gap-5">
          {[
            {
              icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
              label: 'Email',
              value: 'hello@inkwebstudioz.com',
              href: 'mailto:hello@inkwebstudioz.com',
            },
            {
              icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              ),
              label: 'Phone / WhatsApp',
              value: '+91 98765 43210',
              href: 'tel:+919876543210',
            },
            {
              icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              label: 'Location',
              value: 'Pune, Maharashtra, India',
              href: null,
            },
          ].map(({ icon, label, value, href }) => (
            <div key={label} className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                {icon}
              </div>
              <div>
                <p className="text-slate-500 text-xs mb-1">{label}</p>
                {href ? (
                  <a href={href} className="text-slate-200 text-sm hover:text-blue-400 transition-colors">{value}</a>
                ) : (
                  <p className="text-slate-200 text-sm">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Office hours */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7">
        <h3 className="text-white font-bold text-base mb-4">Office Hours</h3>
        <div className="flex flex-col gap-2.5">
          {[
            { day: 'Monday – Friday', hours: '9:00 AM – 7:00 PM IST' },
            { day: 'Saturday', hours: '10:00 AM – 2:00 PM IST' },
            { day: 'Sunday', hours: 'Closed' },
          ].map(({ day, hours }) => (
            <div key={day} className="flex items-center justify-between">
              <span className="text-slate-400 text-sm">{day}</span>
              <span className={`text-sm font-medium ${hours === 'Closed' ? 'text-slate-600' : 'text-white'}`}>{hours}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
          <p className="text-emerald-300 text-xs">Available now — avg. response in 2 hours</p>
        </div>
      </div>

      {/* FAQ Teaser */}
      <div className="bg-blue-600/10 border border-blue-500/20 rounded-2xl p-7">
        <h3 className="text-white font-bold text-base mb-2">Quick Questions?</h3>
        <p className="text-slate-400 text-sm mb-4">
          Check if your question is already answered in our FAQ, or ping us on WhatsApp for a quicker reply.
        </p>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Chat on WhatsApp
        </a>
      </div>
    </div>
  )
}

// ─── Page Export ──────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <Header />
      {/* Hero */}
      <section className=" -mt-24 pt-44 pb-14 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/4" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">Get in Touch</p>
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Lets Build
            <br />
            <span className="text-blue-400">Something Great</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
            Whether you have a fully formed brief or just a rough idea — fill in the form below and we will set up a free discovery call to figure out the best path forward.
          </p>
        </div>
      </section>

      {/* Form + Info grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}