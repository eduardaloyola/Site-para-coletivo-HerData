import { useEffect, useState } from 'react'

import { NAV_LINKS } from '../../data/siteContent'
import { BrandLogo } from '../ui/BrandLogo'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy/95 backdrop-blur border-b border-white/10 py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#">
          <BrandLogo size={36} textSize="text-xl" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-pink transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="ml-2 px-5 py-2.5 bg-pink text-white text-sm font-semibold rounded-full hover:bg-pink-light transition-colors"
          >
            Faça parte
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          <span className={`block w-6 h-0.5 bg-white transition-all mb-1.5 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all mb-1.5 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-navy-light border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="text-base text-white/80" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="mt-2 px-5 py-3 bg-pink text-white text-sm font-semibold rounded-full text-center"
            onClick={() => setOpen(false)}
          >
            Faça parte
          </a>
        </div>
      )}
    </nav>
  )
}
