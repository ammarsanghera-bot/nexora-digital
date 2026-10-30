import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { ProjectMockup } from '../projects/ProjectMockup'
import { projects } from '../../data/projects'

export function FeaturedProjects() {
  return (
    <section
      className="section-pad border-t border-white/10 bg-nexora-surface/40"
      aria-labelledby="projects-heading"
    >
      <div className="container-shell">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="projects-heading"
            className="mb-0"
            eyebrow="Selected Work"
            title="Selected Work. Thoughtfully Built."
            description="Three fictional concept projects created to demonstrate design systems, layout craft, and WordPress-ready structure."
          />
          <Button to="/projects" variant="secondary" className="shrink-0 self-start sm:self-auto">
            View all projects
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="surface-card surface-card-hover overflow-hidden"
            >
              <ProjectMockup project={project} className="rounded-none border-0 border-b border-white/10" />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nexora-accent">
                  {project.category} · Concept
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-nexora-muted">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="tech-chip">
                      {tech}
                    </li>
                  ))}
                </ul>
                <Link to="/projects" className="btn-ghost mt-5">
                  View Project
                  <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
