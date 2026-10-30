import { useMemo, useState } from 'react'
import { PageHero } from '../components/ui/PageHero'
import { ProjectMockup } from '../components/projects/ProjectMockup'
import { ProjectModal } from '../components/projects/ProjectModal'
import {
  projectCategories,
  projects,
  type Project,
  type ProjectCategory,
} from '../data/projects'
import { cn } from '../lib/utils'

export function ProjectsPage() {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All')
  const [active, setActive] = useState<Project | null>(null)

  const filtered = useMemo(() => {
    if (filter === 'All') return projects
    return projects.filter((p) => p.category === filter)
  }, [filter])

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Concept work that shows the craft."
        description="These are fictional demonstration projects—clearly labeled as concepts—to showcase layout systems, interaction design, and WordPress-ready structure. They are not completed client engagements."
      />

      <section className="section-pad pt-12" aria-labelledby="portfolio-grid">
        <div className="container-shell">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 id="portfolio-grid" className="font-display text-2xl font-semibold text-white">
              Portfolio grid
            </h2>
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Filter projects by category"
            >
              {projectCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setFilter(category)}
                  className={cn(
                    'rounded-lg border px-3 py-2 text-sm transition',
                    filter === category
                      ? 'border-nexora-accent/40 bg-nexora-accent/10 text-nexora-accent'
                      : 'border-white/10 text-nexora-muted hover:text-white',
                  )}
                  aria-pressed={filter === category}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((project) => (
              <article
                key={project.id}
                className="surface-card surface-card-hover overflow-hidden"
              >
                <button
                  type="button"
                  className="block w-full text-left"
                  onClick={() => setActive(project)}
                  aria-label={`View details for ${project.title}`}
                >
                  <ProjectMockup
                    project={project}
                    className="rounded-none border-0 border-b border-white/10 transition duration-500 group-hover:scale-[1.01]"
                  />
                </button>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nexora-accent">
                    {project.category} · Concept
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-nexora-muted">{project.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li key={tech} className="tech-chip">
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => setActive(project)}
                    className="btn-ghost mt-5"
                  >
                    View Project
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="mt-10 text-center text-nexora-muted">
              No concept projects in this category.
            </p>
          ) : null}
        </div>
      </section>

      {active ? (
        <ProjectModal project={active} onClose={() => setActive(null)} />
      ) : null}
    </>
  )
}
