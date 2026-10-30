export type ProjectCategory = 'Architecture' | 'E-commerce' | 'Technology'

export type Project = {
  id: string
  title: string
  category: ProjectCategory
  description: string
  longDescription: string
  technologies: string[]
  conceptNote: string
  accent: string
  mockupVariant: 'architecture' | 'ecommerce' | 'technology'
}

export const projectCategories: Array<ProjectCategory | 'All'> = [
  'All',
  'Architecture',
  'E-commerce',
  'Technology',
]

/**
 * Fictional concept projects for portfolio demonstration only.
 * Not real client work. Do not present as completed client deliverables.
 */
export const projects: Project[] = [
  {
    id: 'lumen-atelier',
    title: 'Luxury Architecture Studio',
    category: 'Architecture',
    description:
      'Premium architecture and interior design website concept with editorial layout and project storytelling.',
    longDescription:
      'A concept website for a luxury architecture practice. The experience emphasizes spatial photography, quiet typography, and case-study storytelling—designed to feel refined on desktop and deliberate on mobile.',
    technologies: ['WordPress', 'Elementor', 'Custom CSS', 'Technical SEO'],
    conceptNote: 'Fictional concept project for portfolio demonstration.',
    accent: '#A3E635',
    mockupVariant: 'architecture',
  },
  {
    id: 'northline-commerce',
    title: 'Modern E-commerce Brand',
    category: 'E-commerce',
    description:
      'Product-focused e-commerce website concept built around clarity, conversion, and catalog flexibility.',
    longDescription:
      'A concept storefront for a modern product brand. Product grids, detail pages, and checkout cues are designed for clarity—showing how a WooCommerce-ready experience can feel premium without visual noise.',
    technologies: ['WooCommerce', 'WordPress', 'PHP', 'JavaScript'],
    conceptNote: 'Fictional concept project for portfolio demonstration.',
    accent: '#7DD3FC',
    mockupVariant: 'ecommerce',
  },
  {
    id: 'vertex-systems',
    title: 'Corporate Technology Company',
    category: 'Technology',
    description:
      'Professional technology company website concept with clear services, product narrative, and trust-building structure.',
    longDescription:
      'A concept site for a B2B technology company. The structure balances product messaging, service clarity, and conversion paths—demonstrating how enterprise-facing brands can stay modern without looking generic.',
    technologies: ['WordPress', 'Custom Theme', 'REST API', 'Performance'],
    conceptNote: 'Fictional concept project for portfolio demonstration.',
    accent: '#C4B5FD',
    mockupVariant: 'technology',
  },
]
