import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { capabilities, processSteps, values } from '../data/content'

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A digital agency focused on websites that earn trust."
        description="Nexora Digital designs and develops premium web experiences—especially WordPress and Elementor builds—that help businesses look credible, move faster, and stay maintainable."
      />

      <section className="section-pad" aria-labelledby="about-story">
        <div className="container-shell grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 id="about-story" className="heading-display text-3xl sm:text-4xl">
              About Nexora Digital
            </h2>
            <p className="mt-5 text-body">
              Nexora Digital is an independent digital agency identity created to
              demonstrate professional website design and development capabilities
              for international clients and employers.
            </p>
            <p className="mt-4 text-body">
              The brand represents a clear point of view: premium visual craft,
              practical WordPress engineering, and long-term usefulness. This
              website is a React frontend portfolio project—its layouts and
              sections are structured so equivalent experiences can later be
              recreated in WordPress and Elementor.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="surface-card p-6 sm:col-span-2">
              <h3 className="font-display text-lg font-semibold text-white">
                Mission
              </h3>
              <p className="mt-3 text-sm text-nexora-muted">
                Help ambitious businesses stand out online with websites that are
                beautiful, fast, and easy to maintain.
              </p>
            </div>
            <div className="surface-card p-6">
              <h3 className="font-display text-lg font-semibold text-white">
                Vision
              </h3>
              <p className="mt-3 text-sm text-nexora-muted">
                Digital experiences that feel premium on day one and remain
                valuable years later.
              </p>
            </div>
            <div className="surface-card p-6">
              <h3 className="font-display text-lg font-semibold text-white">
                Philosophy
              </h3>
              <p className="mt-3 text-sm text-nexora-muted">
                Strategy first, design with intention, develop for maintainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section-pad border-t border-white/10 bg-nexora-surface/40"
        aria-labelledby="values-heading"
      >
        <div className="container-shell">
          <SectionHeading
            id="values-heading"
            eyebrow="Values"
            title="What guides the work."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="surface-card p-6"
              >
                <h3 className="font-display text-xl font-semibold text-white">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm text-nexora-muted">{value.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="capabilities-heading">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            id="capabilities-heading"
            className="mb-0"
            eyebrow="Capabilities"
            title="Technical capabilities."
            description="A practical stack for modern marketing sites, WordPress products, and commerce experiences."
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-white/10 bg-nexora-card px-4 py-3 text-sm text-nexora-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="section-pad border-t border-white/10 bg-nexora-surface/40"
        aria-labelledby="about-process"
      >
        <div className="container-shell">
          <SectionHeading
            id="about-process"
            eyebrow="Working Process"
            title="How engagements typically move."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <article key={step.step} className="surface-card p-6">
                <p className="font-display text-sm text-nexora-accent">{step.step}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-nexora-muted">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="container-shell">
          <div className="rounded-3xl border border-nexora-accent/20 bg-nexora-card px-8 py-12 sm:px-12">
            <h2 className="heading-display text-3xl sm:text-4xl">
              Let&apos;s build something lasting.
            </h2>
            <p className="mt-4 max-w-xl text-body">
              If you need a premium WordPress or Elementor website—or want to
              evaluate development craft for a remote role—start a conversation.
            </p>
            <Button to="/contact" className="mt-8">
              Start a conversation
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
