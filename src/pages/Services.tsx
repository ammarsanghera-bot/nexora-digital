import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { services } from '../data/services'
import { serviceFaqs } from '../data/content'

export function ServicesPage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [hash])

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Digital services built for clarity, performance, and growth."
        description="WordPress, Elementor, commerce, design, maintenance, and SEO—delivered as a cohesive system your team can actually use."
      />

      <section className="section-pad border-b border-white/10">
        <div className="container-shell max-w-3xl">
          <p className="text-lg leading-relaxed text-nexora-muted">
            Nexora Digital helps businesses launch and improve websites that look
            premium, load quickly, and stay maintainable. Whether you need a new
            WordPress build, an Elementor system, or ongoing technical care, the
            focus stays on practical outcomes—not temporary visual trends.
          </p>
        </div>
      </section>

      <section className="section-pad" aria-label="Service details">
        <div className="container-shell space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.id}
                id={service.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45 }}
                className="scroll-mt-28 grid gap-8 rounded-3xl border border-white/10 bg-nexora-card p-6 sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:p-10"
              >
                <div>
                  <div className="mb-5 inline-flex rounded-xl border border-nexora-accent/20 bg-nexora-accent/10 p-3 text-nexora-accent">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <p className="eyebrow mb-3">0{index + 1}</p>
                  <h2 className="heading-display text-3xl">{service.title}</h2>
                  <p className="mt-4 text-body">{service.longDescription}</p>
                  <p className="mt-5 text-sm text-nexora-muted">
                    <span className="font-medium text-white">Approach: </span>
                    {service.approach}
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="font-display text-sm font-semibold tracking-wide text-white">
                      Benefits
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {service.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex gap-2.5 text-sm text-nexora-muted"
                        >
                          <Check
                            size={16}
                            className="mt-0.5 shrink-0 text-nexora-accent"
                            aria-hidden="true"
                          />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold tracking-wide text-white">
                      Technologies
                    </h3>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <li key={tech} className="tech-chip">
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn-ghost mt-8">
                      Discuss this service
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </section>

      <section
        className="section-pad border-t border-white/10 bg-nexora-surface/40"
        aria-labelledby="faq-heading"
      >
        <div className="container-shell">
          <SectionHeading
            id="faq-heading"
            eyebrow="FAQ"
            title="Common questions about working together."
          />
          <div className="mx-auto max-w-3xl divide-y divide-white/10 rounded-2xl border border-white/10 bg-nexora-card">
            {serviceFaqs.map((faq) => (
              <details key={faq.question} className="group px-6 py-5">
                <summary className="cursor-pointer list-none font-display text-lg font-semibold text-white marker:content-none">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-nexora-accent transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-nexora-muted">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="container-shell">
          <div className="rounded-3xl border border-nexora-accent/20 bg-nexora-card px-8 py-12 text-center sm:px-12">
            <h2 className="heading-display text-3xl sm:text-4xl">
              Ready to improve your digital presence?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body">
              Tell us about your goals and we&apos;ll help shape a clear next
              step.
            </p>
            <Button to="/contact" className="mt-8">
              Contact Nexora Digital
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
