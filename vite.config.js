import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// For GitHub Pages project site:
// https://nubianurain.github.io/duke-ai-summit-demo/
export default defineConfig({
  base: '/duke-ai-summit-demo/',
  plugins: [react(), tailwindcss()],
})
