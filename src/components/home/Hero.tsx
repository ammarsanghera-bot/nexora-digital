import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-radial-accent" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-radial-soft" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse at center, black 20%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="container-shell relative grid items-center gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow mb-5">Independent Digital Agency</p>
          <h1 className="heading-display text-4xl leading-[1.05] sm:text-5xl lg:text-[3.5rem] xl:text-[3.85rem]">
            Building Digital Experiences That Make Businesses Stand Out.
          </h1>
          <p className="mt-6 max-w-xl text-base text-body sm:text-lg">
            We design and develop high-performing websites that help ambitious
            businesses attract customers, build trust, and grow online.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button to="/contact">
              Start a Project
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
            <Button to="/projects" variant="secondary">
              Explore Our Work
              <ArrowUpRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
          aria-hidden="true"
        >
          <HeroMockup />
        </motion.div>
      </div>
    </section>
  )
}

function HeroMockup() {
  return (
    <div className="relative mx-auto max-w-lg lg:max-w-none">
      <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-nexora-accent/20 blur-3xl" />
      <div className="absolute -bottom-8 -left-8 h-44 w-44 rounded-full bg-nexora-accent/10 blur-3xl" />

      <div className="relative rounded-2xl border border-white/10 bg-nexora-card p-3 shadow-glow sm:p-4">
        <div className="rounded-xl border border-white/10 bg-nexora-bg p-4 sm:p-5">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-nexora-accent" />
              <span className="font-display text-xs font-semibold tracking-wider text-white">
                NEXORA STUDIO
              </span>
            </div>
            <div className="flex gap-4 text-[10px] uppercase tracking-wider text-nexora-muted">
              <span>Work</span>
              <span>Services</span>
              <span>Contact</span>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-lg bg-gradient-to-br from-white/[0.07] to-transparent p-4">
              <div className="mb-3 h-2 w-20 rounded bg-nexora-accent/80" />
              <div className="h-3 w-4/5 rounded bg-white/25" />
              <div className="mt-2 h-2 w-3/5 rounded bg-white/10" />
              <div className="mt-5 flex gap-2">
                <div className="h-7 w-20 rounded-md bg-nexora-accent/90" />
                <div className="h-7 w-20 rounded-md border border-white/10" />
              </div>
            </div>
            <div className="grid gap-3">
              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                <div className="h-2 w-12 rounded bg-white/20" />
                <div className="mt-3 h-10 rounded bg-white/[0.04]" />
              </div>
              <div className="rounded-lg border border-nexora-accent/20 bg-nexora-accent/5 p-3">
                <div className="h-2 w-16 rounded bg-nexora-accent/70" />
                <div className="mt-3 h-8 rounded bg-white/[0.04]" />
              </div>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-16 rounded-lg border border-white/10 bg-white/[0.03]"
              />
            ))}
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-3 top-16 rounded-xl border border-white/10 bg-nexora-card px-3 py-2 shadow-glow-sm sm:-left-6"
      >
        <p className="text-[10px] uppercase tracking-wider text-nexora-muted">Performance</p>
        <p className="font-display text-sm font-semibold text-white">Fast · Clean · SEO-ready</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        className="absolute -right-2 bottom-20 rounded-xl border border-white/10 bg-nexora-card px-3 py-2 sm:-right-4"
      >
        <p className="text-[10px] uppercase tracking-wider text-nexora-muted">Stack</p>
        <p className="font-display text-sm font-semibold text-nexora-accent">
          WP · Elementor · Woo
        </p>
      </motion.div>
    </div>
  )
}
