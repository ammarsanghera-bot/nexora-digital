import type { Project } from '../../data/projects'
import { cn } from '../../lib/utils'

type ProjectMockupProps = {
  project: Project
  className?: string
}

export function ProjectMockup({ project, className }: ProjectMockupProps) {
  return (
    <div
      className={cn(
        'relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-nexora-surface',
        className,
      )}
      role="img"
      aria-label={`Concept preview for ${project.title}`}
    >
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background:
            project.mockupVariant === 'architecture'
              ? 'linear-gradient(145deg, #1a2030 0%, #0f141f 45%, #243018 100%)'
              : project.mockupVariant === 'ecommerce'
                ? 'linear-gradient(145deg, #15202b 0%, #0f141f 50%, #1b2a24 100%)'
                : 'linear-gradient(145deg, #1a1830 0%, #0f141f 50%, #182230 100%)',
        }}
      />

      <div className="absolute inset-4 rounded-lg border border-white/10 bg-nexora-bg/80 p-3 sm:inset-5 sm:p-4">
        <div className="mb-3 flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="ml-2 h-2 flex-1 rounded-full bg-white/5" />
        </div>

        {project.mockupVariant === 'architecture' ? (
          <ArchitectureLayout accent={project.accent} />
        ) : null}
        {project.mockupVariant === 'ecommerce' ? (
          <EcommerceLayout accent={project.accent} />
        ) : null}
        {project.mockupVariant === 'technology' ? (
          <TechnologyLayout accent={project.accent} />
        ) : null}
      </div>

      <div className="absolute bottom-3 left-3 rounded-md border border-white/10 bg-nexora-bg/80 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-nexora-muted backdrop-blur-sm sm:bottom-4 sm:left-4">
        Concept
      </div>
    </div>
  )
}

function ArchitectureLayout({ accent }: { accent: string }) {
  return (
    <div className="grid h-[calc(100%-1.25rem)] grid-cols-5 gap-2">
      <div className="col-span-3 flex flex-col justify-end rounded-md bg-white/[0.04] p-3">
        <div className="mb-2 h-2 w-16 rounded" style={{ backgroundColor: accent }} />
        <div className="h-2 w-3/4 rounded bg-white/20" />
        <div className="mt-1.5 h-1.5 w-1/2 rounded bg-white/10" />
      </div>
      <div className="col-span-2 grid gap-2">
        <div className="rounded-md bg-white/[0.06]" />
        <div className="rounded-md bg-white/[0.03]" />
      </div>
    </div>
  )
}

function EcommerceLayout({ accent }: { accent: string }) {
  return (
    <div className="flex h-[calc(100%-1.25rem)] flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="h-2 w-14 rounded bg-white/20" />
        <div className="h-2 w-8 rounded" style={{ backgroundColor: accent }} />
      </div>
      <div className="grid flex-1 grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex flex-col rounded-md bg-white/[0.04] p-2">
            <div className="mb-2 flex-1 rounded bg-white/[0.06]" />
            <div className="h-1.5 w-3/4 rounded bg-white/15" />
            <div className="mt-1 h-1.5 w-1/3 rounded bg-white/10" />
          </div>
        ))}
      </div>
    </div>
  )
}

function TechnologyLayout({ accent }: { accent: string }) {
  return (
    <div className="flex h-[calc(100%-1.25rem)] flex-col gap-2">
      <div className="flex flex-1 flex-col justify-center rounded-md bg-white/[0.03] p-3">
        <div className="mb-2 h-2 w-20 rounded" style={{ backgroundColor: accent }} />
        <div className="h-2.5 w-4/5 rounded bg-white/20" />
        <div className="mt-2 h-1.5 w-3/5 rounded bg-white/10" />
        <div className="mt-3 flex gap-2">
          <div className="h-5 w-16 rounded bg-white/10" />
          <div className="h-5 w-16 rounded border border-white/10" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="h-8 rounded-md bg-white/[0.05]" />
        <div className="h-8 rounded-md bg-white/[0.05]" />
        <div className="h-8 rounded-md bg-white/[0.05]" />
      </div>
    </div>
  )
}
