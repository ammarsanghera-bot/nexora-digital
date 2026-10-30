import type { LucideIcon } from 'lucide-react'
import {
  Code2,
  Gauge,
  LayoutTemplate,
  Paintbrush,
  ShieldCheck,
  ShoppingBag,
} from 'lucide-react'

export type Service = {
  id: string
  slug: string
  title: string
  shortDescription: string
  longDescription: string
  benefits: string[]
  technologies: string[]
  approach: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    id: 'wordpress',
    slug: 'wordpress',
    title: 'WordPress Development',
    shortDescription:
      'Custom WordPress websites built for flexibility and performance.',
    longDescription:
      'We build WordPress experiences that editors can manage confidently and developers can extend cleanly. From custom themes to structured content models, every build prioritizes maintainability, speed, and long-term flexibility.',
    benefits: [
      'Custom theme architecture tailored to your content',
      'Editor-friendly workflows without sacrificing design quality',
      'Clean, documented code that is easy to maintain',
      'Secure foundations with sensible defaults',
    ],
    technologies: ['WordPress', 'PHP', 'ACF', 'MySQL', 'Git'],
    approach:
      'We start with content structure and business goals, then implement a theme and component system that can grow with your team.',
    icon: Code2,
  },
  {
    id: 'elementor',
    slug: 'elementor',
    title: 'Elementor Development',
    shortDescription:
      'Beautiful, responsive websites with flexible page-building experiences.',
    longDescription:
      'Elementor projects are designed for teams that need visual flexibility without a fragile design system. We create reusable templates, global styles, and polished sections that stay consistent across pages.',
    benefits: [
      'Reusable templates and global design tokens',
      'Responsive layouts refined for mobile and desktop',
      'Faster content updates for marketing teams',
      'Custom widgets when standard blocks are not enough',
    ],
    technologies: ['Elementor', 'WordPress', 'CSS', 'JavaScript'],
    approach:
      'We define a clear design system inside Elementor first, then build pages that stay on-brand as your team publishes new content.',
    icon: LayoutTemplate,
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    title: 'E-commerce Solutions',
    shortDescription:
      'User-friendly online stores with optimized shopping experiences.',
    longDescription:
      'From product discovery to checkout, we design storefronts that feel clear and trustworthy. WooCommerce builds focus on conversion-friendly flows, maintainable catalog structure, and performance under real traffic.',
    benefits: [
      'Product templates designed for clarity and conversion',
      'Streamlined cart and checkout experiences',
      'Catalog structures that scale with inventory',
      'Performance-aware storefront development',
    ],
    technologies: ['WooCommerce', 'WordPress', 'PHP', 'JavaScript', 'MySQL'],
    approach:
      'We map the buying journey, then implement product, cart, and checkout experiences that reduce friction without overcomplicating operations.',
    icon: ShoppingBag,
  },
  {
    id: 'uiux',
    slug: 'uiux',
    title: 'UI/UX Design',
    shortDescription:
      'Thoughtful digital interfaces focused on usability and conversion.',
    longDescription:
      'Design is treated as a business tool—not decoration. We shape information hierarchy, interaction patterns, and visual systems that help visitors understand value quickly and take the next step.',
    benefits: [
      'Clear visual hierarchy and content structure',
      'Conversion-minded page and section design',
      'Consistent component systems',
      'Responsive design that feels intentional on every screen',
    ],
    technologies: ['Figma', 'Design Systems', 'Prototyping', 'Accessibility'],
    approach:
      'We align on goals and audience, explore layout directions, then refine a polished system ready for development in WordPress or Elementor.',
    icon: Paintbrush,
  },
  {
    id: 'maintenance',
    slug: 'maintenance',
    title: 'Website Maintenance',
    shortDescription:
      'Reliable updates, security checks, backups, and ongoing support.',
    longDescription:
      'A website is never “done.” We provide structured maintenance so updates, backups, and security checks happen consistently—keeping your digital presence stable while your business focuses on growth.',
    benefits: [
      'Scheduled core, plugin, and theme updates',
      'Backup routines and recovery readiness',
      'Security monitoring and hardening practices',
      'Ongoing support for content and small enhancements',
    ],
    technologies: ['WordPress', 'Security Tools', 'Staging', 'Git'],
    approach:
      'We establish a predictable maintenance cadence with clear reporting so you always know what changed and why.',
    icon: ShieldCheck,
  },
  {
    id: 'seo',
    slug: 'seo',
    title: 'SEO & Performance',
    shortDescription:
      'Technical SEO, speed optimization, and search-friendly structure.',
    longDescription:
      'Visibility and speed are part of the product. We improve technical foundations—structure, metadata, Core Web Vitals factors, and clean HTML—so your site is ready to earn attention and keep visitors engaged.',
    benefits: [
      'Technical SEO foundations and clean site structure',
      'Image, asset, and rendering performance improvements',
      'Search-friendly headings, metadata, and internal linking',
      'Measurable improvements tracked after launch',
    ],
    technologies: ['Technical SEO', 'Core Web Vitals', 'Caching', 'Schema'],
    approach:
      'We audit, prioritize high-impact fixes, then implement optimizations that improve both search readiness and real-user experience.',
    icon: Gauge,
  },
]
