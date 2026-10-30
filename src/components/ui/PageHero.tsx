import { motion } from 'framer-motion'

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 pt-32 pb-16 sm:pt-36 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-radial-accent" aria-hidden="true" />
      <div className="container-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base text-body sm:text-lg">{description}</p>
        </motion.div>
      </div>
    </section>
  )
}
