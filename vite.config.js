import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// For GitHub Pages repo: https://github.com/gaurav8502/Personal
// If your repo name changes, update base to '/NEW_REPO_NAME/'
export default defineConfig({
  base: '/Personal/',
  plugins: [react(), tailwindcss()],
})
