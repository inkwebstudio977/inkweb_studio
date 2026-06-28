'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
]

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        setMenuOpen(false)
    }, [pathname])

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''

        return () => {
            document.body.style.overflow = ''
        }
    }, [menuOpen])

    return (
        <>
            {/* Header */}
            <header
                className={`fixed inset-x-0 top-4 z-50 px-4 transition-all duration-300 ${scrolled ? 'py-0' : 'py-1'
                    }`}
            >
                <div
                    className={`mx-auto flex h-16 w-full max-w-7xl items-center justify-between rounded-2xl border border-white/10 px-6 lg:px-8 transition-all duration-300 ${scrolled
                        ? 'bg-blue-950/90 backdrop-blur-xl shadow-2xl shadow-blue-900/20'
                        : 'bg-blue-950'
                        }`}
                >
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-0 select-none"
                    >
                        <span className="text-2xl lg:text-3xl font-bold text-white">
                            Inkweb
                        </span>

                        <span className="text-2xl lg:text-3xl font-bold text-blue-400">
                            Studioz
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {NAV_LINKS.map(({ label, href }) => {
                            const active = pathname === href

                            return (
                                <Link
                                    key={label}
                                    href={href}
                                    className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 ${active
                                            ? "text-white"
                                            : "text-slate-400 hover:text-white"
                                        }`}
                                >
                                    <span>{label}</span>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className={`h-4 w-4 transition-all duration-300 ${active
                                                ? "translate-x-0 rotate-0 opacity-100"
                                                : "opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 group-hover:-rotate-45"
                                            }`}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M7 17L17 7M17 7H9M17 7V15"
                                        />
                                    </svg>
                                </Link>
                            )
                        })}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex">
                        <Link
                            href="/contact"
                            className="rounded-xl bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/40"
                        >
                            Get Started →
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
                        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 transition-colors hover:bg-white/5 lg:hidden"
                    >
                        <span
                            className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''
                                }`}
                        />

                        <span
                            className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${menuOpen ? 'scale-x-0 opacity-0' : ''
                                }`}
                        />

                        <span
                            className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''
                                }`}
                        />
                    </button>
                </div>
            </header>
            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${menuOpen
                    ? 'pointer-events-auto opacity-100'
                    : 'pointer-events-none opacity-0'
                    }`}
            >
                {/* Backdrop */}
                <div
                    onClick={() => setMenuOpen(false)}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />

                {/* Drawer */}
                <aside
                    className={`absolute right-0 top-0 flex h-full w-72 flex-col bg-blue-950 shadow-2xl transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    {/* Drawer Header */}
                    <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
                        <Link
                            href="/"
                            className="flex items-center"
                        >
                            <span className="text-xl font-bold text-white">
                                Inkweb
                            </span>

                            <span className="text-xl font-bold text-blue-400">
                                Studioz
                            </span>
                        </Link>

                        <button
                            onClick={() => setMenuOpen(false)}
                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white transition hover:bg-white/10"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-1 flex-col gap-2 p-5">
                        {NAV_LINKS.map(({ label, href }) => {
                            const active = pathname === href

                            return (
                                <Link
                                    key={label}
                                    href={href}
                                    className={`rounded-xl border px-4 py-3 text-sm font-medium transition-all ${active
                                        ? 'border-blue-400/40 bg-blue-500/20 text-white'
                                        : 'border-transparent text-slate-300 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    {label}
                                </Link>
                            )
                        })}
                    </nav>

                    {/* CTA */}
                    <div className="border-t border-white/10 p-5">
                        <Link
                            href="/contact"
                            className="block w-full rounded-xl bg-blue-500 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-400"
                        >
                            Get Started →
                        </Link>
                    </div>
                </aside>
            </div>

            {/* Spacer */}
            <div className="h-24" />
        </>
    )
}