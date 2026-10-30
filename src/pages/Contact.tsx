import { Mail, MapPin, Share2 } from 'lucide-react'
import { PageHero } from '../components/ui/PageHero'
import { ContactForm } from '../components/contact/ContactForm'
import { site, socialLinks } from '../data/navigation'

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about the project you want to build."
        description="Share your goals, timeline, and constraints. This inquiry form is a frontend demonstration—connect a real form service before production use."
      />

      <section className="section-pad pt-12" aria-labelledby="contact-content">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <h2 id="contact-content" className="heading-display text-3xl">
              Project inquiry
            </h2>
            <p className="mt-4 text-body">
              Prefer a direct note? Use the email below or reach out on social.
              Placeholders are intentional until real business channels are
              configured.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="surface-card flex gap-4 p-5">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-nexora-accent/20 bg-nexora-accent/10 text-nexora-accent">
                  <Mail size={18} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-medium text-white">Business email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 break-all text-sm text-nexora-muted transition hover:text-nexora-accent"
                  >
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="surface-card flex gap-4 p-5">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-nexora-accent/20 bg-nexora-accent/10 text-nexora-accent">
                  <MapPin size={18} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-medium text-white">Availability</p>
                  <p className="mt-1 text-sm text-nexora-muted">{site.location}</p>
                </div>
              </li>
              <li className="surface-card flex gap-4 p-5">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-nexora-accent/20 bg-nexora-accent/10 text-nexora-accent">
                  <Share2 size={18} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-medium text-white">Social</p>
                  <ul className="mt-2 space-y-1">
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
              </li>
            </ul>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  )
}
