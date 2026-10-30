import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '../ui/Button'

export function HomeCTA() {
  return (
    <section className="pb-20 sm:pb-24 lg:pb-28" aria-labelledby="cta-heading">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-3xl border border-nexora-accent/20 bg-nexora-card px-8 py-14 sm:px-12 sm:py-16"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(163,230,53,0.18),transparent_50%)]"
            aria-hidden="true"
          />
          <div className="relative max-w-2xl">
            <h2
              id="cta-heading"
              className="heading-display text-3xl sm:text-4xl lg:text-5xl"
            >
              Have a Project in Mind?
            </h2>
            <p className="mt-5 text-base text-body sm:text-lg">
              Let&apos;s create a digital experience that moves your business
              forward.
            </p>
            <Button to="/contact" className="mt-8">
              Let&apos;s Discuss Your Project
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
