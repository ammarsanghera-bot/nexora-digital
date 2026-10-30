import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'
import { processSteps } from '../../data/content'

export function Process() {
  return (
    <section
      className="section-pad border-t border-white/10 bg-nexora-surface/40"
      aria-labelledby="process-heading"
    >
      <div className="container-shell">
        <SectionHeading
          id="process-heading"
          eyebrow="Process"
          title="A Clear Process. Better Results."
          description="A structured path from discovery to launch—so scope stays clear and delivery stays intentional."
        />

        <ol className="relative grid gap-6 lg:grid-cols-4 lg:gap-4">
          <div
            className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-nexora-accent/40 to-transparent lg:block"
            aria-hidden="true"
          />
          {processSteps.map((step, index) => (
            <motion.li
              key={step.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="relative border-l border-white/10 pl-5 lg:border-l-0 lg:pl-0"
            >
              <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full border border-nexora-accent/40 bg-nexora-bg font-display text-xs font-semibold text-nexora-accent lg:mx-auto">
                {step.step}
              </div>
              <h3 className="font-display text-xl font-semibold text-white lg:text-center">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-nexora-muted lg:text-center">
                {step.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
