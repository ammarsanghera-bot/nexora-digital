import { Link } from 'react-router-dom'
import { cn } from '../../lib/utils'

type LogoProps = {
  className?: string
  compact?: boolean
}

export function Logo({ className, compact = false }: LogoProps) {
  return (
    <Link
      to="/"
      className={cn('group inline-flex items-center gap-2.5', className)}
      aria-label="Nexora Digital home"
    >
      <span
        className="relative flex h-8 w-8 items-center justify-center"
        aria-hidden="true"
      >
        <span className="absolute inset-0 rotate-45 rounded-[6px] border border-nexora-accent/50 bg-nexora-accent/10 transition group-hover:bg-nexora-accent/20" />
        <span className="absolute h-2.5 w-2.5 rounded-sm bg-nexora-accent" />
      </span>
      {!compact ? (
        <span className="font-display text-lg font-semibold tracking-[0.08em] text-white">
          NEXORA
        </span>
      ) : null}
    </Link>
  )
}
