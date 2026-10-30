import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Logo } from '../ui/Logo'
import { Button } from '../ui/Button'
import { navLinks } from '../../data/navigation'
import { cn } from '../../lib/utils'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition duration-300',
        scrolled || open
          ? 'border-b border-white/10 bg-nexora-bg/85 backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <div className="container-shell flex h-16 items-center justify-between sm:h-[4.25rem]">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'rounded-lg px-3 py-2 text-sm transition',
                  isActive
                    ? 'bg-white/5 text-nexora-accent'
                    : 'text-nexora-muted hover:bg-white/[0.03] hover:text-white',
                )
              }
              end={link.path === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/contact">Let&apos;s Talk</Button>
        </div>

        <button
          type="button"
          className="inline-flex rounded-lg border border-white/10 p-2 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-nexora-bg lg:hidden"
          >
            <nav className="container-shell flex flex-col gap-1 py-4" aria-label="Mobile">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      'rounded-lg px-3 py-3 text-base transition',
                      isActive
                        ? 'bg-white/5 text-nexora-accent'
                        : 'text-nexora-muted hover:bg-white/[0.03] hover:text-white',
                    )
                  }
                  end={link.path === '/'}
                >
                  {link.label}
                </NavLink>
              ))}
              <Button to="/contact" className="mt-3 w-full">
                Let&apos;s Talk
              </Button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
