import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'
import { whyChooseUs } from '../../data/content'

export function WhyChooseUs() {
  return (
    <section className="section-pad" aria-labelledby="why-heading">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            id="why-heading"
            className="mb-0"
            eyebrow="Why Nexora"
            title="More Than a Website. A Better Digital Foundation."
            description="Premium websites succeed when strategy, design, and maintainable development work together after launch—not only on launch day."
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {whyChooseUs.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`surface-card p-6 ${index === 0 ? 'sm:translate-y-4' : ''} ${index === 3 ? 'sm:-translate-y-4' : ''}`}
            >
              <span className="font-display text-sm text-nexora-accent">
                0{index + 1}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-nexora-muted">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
