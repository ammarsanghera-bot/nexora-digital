import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'
import { technologies } from '../../data/content'

export function TechStack() {
  return (
    <section className="section-pad" aria-labelledby="tech-heading">
      <div className="container-shell">
        <SectionHeading
          id="tech-heading"
          eyebrow="Technology"
          title="Tools We Build With."
          description="Modern web fundamentals paired with WordPress and Elementor expertise—ready for real client delivery."
          align="center"
        />

        <ul className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-3">
          {technologies.map((tech, index) => (
            <motion.li
              key={tech}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="rounded-xl border border-white/10 bg-nexora-card px-4 py-3 font-display text-sm font-medium text-white transition hover:border-nexora-accent/40 hover:text-nexora-accent"
            >
              {tech}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
