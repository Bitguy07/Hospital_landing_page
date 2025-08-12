import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Hospital_landing_page/', //Git repository name is Logger
  plugins: [react()],
})
