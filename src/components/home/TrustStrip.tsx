import { trustItems } from '../../data/content'

export function TrustStrip() {
  return (
    <section className="border-y border-white/10 bg-nexora-surface/60" aria-label="Capabilities">
      <div className="container-shell grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:py-14">
        {trustItems.map((item, index) => (
          <div
            key={item.title}
            className={`lg:px-6 ${index > 0 ? 'lg:border-l lg:border-white/10' : ''}`}
          >
            <h2 className="font-display text-lg font-semibold text-white">
              {item.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-nexora-muted">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
