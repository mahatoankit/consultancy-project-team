'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MenuIcon, XIcon, GraduationCap } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/programs', label: 'Programs' },
    { href: '/blog', label: 'Resources' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href) => pathname === href

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
      <div className={`mx-auto transition-all duration-300 ${isScrolled ? 'max-w-6xl px-4 pt-4' : 'max-w-none px-0 pt-0'}`}>
        <div
          className={`hidden md:flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? 'rounded-full bg-white/95 text-[#173a70] shadow-[0_10px_35px_rgba(30,77,140,0.16)] border border-[#d7e6fb] px-2 py-2 backdrop-blur'
              : 'h-16 bg-white/96 backdrop-blur border-b border-[#dbe6f4] text-[#173a70] px-8'
          }`}
        >
          <Link
            href="/"
            className={`flex items-center justify-center shadow-sm transition-all ${
              isScrolled
                ? 'w-10 h-10 rounded-full bg-[#1e6fd9] text-white'
                : 'w-10 h-10 rounded-xl bg-[#1e6fd9] text-white'
            }`}
            aria-label="Team Home"
          >
            <GraduationCap size={16} />
          </Link>

          <nav className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  isActive(link.href)
                    ? isScrolled
                      ? 'bg-[#e8f1ff] text-[#0f3f80]'
                      : 'bg-[#e8f1ff] text-[#0f3f80]'
                    : isScrolled
                      ? 'text-[#35598a] hover:text-[#173a70] hover:bg-[#eef5ff]'
                      : 'text-[#35598a] hover:text-[#173a70] hover:bg-[#eef5ff]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href="mailto:hello@team.consulting"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isScrolled
                ? 'bg-[#1e6fd9] text-white hover:bg-[#1758ad]'
                : 'bg-[#1e6fd9] text-white hover:bg-[#1758ad]'
            }`}
          >
            hello@team.consulting
          </a>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ${
            isScrolled
              ? 'rounded-2xl bg-white/96 text-[#173a70] shadow-[0_10px_25px_rgba(30,77,140,0.14)] border border-[#d7e6fb] px-4 py-3 mt-3 mx-4 backdrop-blur'
              : 'bg-white/96 backdrop-blur text-[#173a70] border-b border-[#dbe6f4] px-4 py-3'
          }`}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2" aria-label="Team Home">
              <span className={`w-8 h-8 inline-flex items-center justify-center ${isScrolled ? 'rounded-full bg-[#1e6fd9] text-white' : 'rounded-lg bg-[#1e6fd9] text-white'}`}>
                <GraduationCap size={14} />
              </span>
              <span className="text-sm font-semibold">Team</span>
            </Link>
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            className={`md:hidden transition-all duration-300 ${
              isScrolled
                ? 'mx-4 mt-2 rounded-2xl border border-[#d7e6fb] bg-white shadow-[0_8px_24px_rgba(30,77,140,0.12)]'
                : 'mx-0 rounded-none border-b border-[#dbe6f4] bg-white'
            }`}
          >
            <nav className="p-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 rounded-lg text-sm ${
                    isActive(link.href)
                      ? 'bg-[#e8f1ff] text-[#0f3f80]'
                      : 'text-[#35598a] hover:bg-[#f1f6ff]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="mailto:hello@team.consulting"
                className="block mt-2 px-3 py-2 rounded-lg text-sm font-medium bg-[#1e6fd9] text-white"
              >
                hello@team.consulting
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
