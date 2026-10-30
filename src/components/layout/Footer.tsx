import { Link } from 'react-router-dom'
import { Logo } from '../ui/Logo'
import { footerServices, navLinks, site, socialLinks } from '../../data/navigation'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-nexora-surface" role="contentinfo">
      <div className="container-shell py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-nexora-muted">
              {site.tagline} Premium WordPress, Elementor, and digital product
              experiences for ambitious businesses.
            </p>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold tracking-wide text-white">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-nexora-muted transition hover:text-nexora-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-nexora-muted transition hover:text-nexora-accent"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold tracking-wide text-white">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5">
              {footerServices.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-nexora-muted transition hover:text-nexora-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold tracking-wide text-white">
              Connect
            </h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all text-sm text-nexora-muted transition hover:text-nexora-accent"
                >
                  {site.email}
                </a>
              </li>
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-nexora-muted transition hover:text-nexora-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-nexora-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="max-w-md sm:text-right">
            Frontend portfolio demonstration. Layouts designed for WordPress /
            Elementor recreation—not a live WordPress site.
          </p>
        </div>
      </div>
    </footer>
  )
}
