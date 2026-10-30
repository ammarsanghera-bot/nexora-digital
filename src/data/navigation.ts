export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
] as const

export const footerServices = [
  { label: 'WordPress Development', path: '/services#wordpress' },
  { label: 'Elementor Development', path: '/services#elementor' },
  { label: 'E-commerce Solutions', path: '/services#ecommerce' },
  { label: 'UI/UX Design', path: '/services#uiux' },
  { label: 'Website Maintenance', path: '/services#maintenance' },
  { label: 'SEO & Performance', path: '/services#seo' },
] as const

export const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://[PLACEHOLDER-linkedin]',
  },
  {
    label: 'GitHub',
    href: 'https://[PLACEHOLDER-github]',
  },
  {
    label: 'X / Twitter',
    href: 'https://[PLACEHOLDER-twitter]',
  },
] as const

export const site = {
  name: 'Nexora Digital',
  tagline: 'Digital Experiences That Move Businesses Forward.',
  email: '[PLACEHOLDER: hello@nexoradigital.com]',
  location: '[PLACEHOLDER: Remote-first · Serving international clients]',
}
