/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nexora: {
          bg: '#0B0D12',
          surface: '#11151D',
          card: '#171C26',
          text: '#FFFFFF',
          muted: '#A5ADBA',
          accent: '#A3E635',
          border: 'rgba(255,255,255,0.10)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 60px rgba(163, 230, 53, 0.15)',
        'glow-sm': '0 0 30px rgba(163, 230, 53, 0.1)',
      },
      backgroundImage: {
        'radial-accent':
          'radial-gradient(ellipse 70% 50% at 70% 20%, rgba(163,230,53,0.12), transparent 60%)',
        'radial-soft':
          'radial-gradient(ellipse 60% 40% at 20% 80%, rgba(163,230,53,0.06), transparent 55%)',
      },
      maxWidth: {
        content: '72rem',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
