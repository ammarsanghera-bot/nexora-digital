import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Required for GitHub Pages project site: https://ammarsanghera-bot.github.io/nexora-digital/
  base: '/nexora-digital/',
})

