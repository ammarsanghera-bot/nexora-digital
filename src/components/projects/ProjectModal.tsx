import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Project } from '../../data/projects'
import { ProjectMockup } from './ProjectMockup'
import { Button } from '../ui/Button'

type ProjectModalProps = {
  project: Project
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return createPortal(
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        aria-label="Close project details"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.28 }}
        className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-nexora-card shadow-glow"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-nexora-card/95 px-5 py-4 backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nexora-accent">
            {project.category} · Concept Project
          </p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-white/10 p-2 text-nexora-muted hover:text-white"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-5 sm:p-7">
          <ProjectMockup project={project} />
          <h2
            id="project-modal-title"
            className="mt-6 font-display text-3xl font-semibold text-white"
          >
            {project.title}
          </h2>
          <p className="mt-2 text-sm text-nexora-accent">{project.conceptNote}</p>
          <p className="mt-4 text-body">{project.longDescription}</p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
            {project.technologies.map((tech) => (
              <li key={tech} className="tech-chip">
                {tech}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/contact" onClick={onClose}>
              Discuss a similar project
            </Button>
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </motion.div>
    </div>,
    document.body,
  )
}
