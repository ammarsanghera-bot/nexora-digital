import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'
import { services } from '../../data/services'

export function ServicesPreview() {
  return (
    <section className="section-pad" aria-labelledby="services-heading">
      <div className="container-shell">
        <SectionHeading
          id="services-heading"
          eyebrow="Services"
          title="Everything Your Digital Presence Needs."
          description="From WordPress and Elementor builds to commerce, design, maintenance, and performance—crafted as a cohesive digital foundation."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="surface-card surface-card-hover group p-6"
              >
                <div className="mb-5 inline-flex rounded-xl border border-nexora-accent/20 bg-nexora-accent/10 p-3 text-nexora-accent">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-nexora-muted">
                  {service.shortDescription}
                </p>
                <Link
                  to={`/services#${service.slug}`}
                  className="btn-ghost mt-5"
                >
                  Learn More
                  <ArrowUpRight
                    size={14}
                    className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
