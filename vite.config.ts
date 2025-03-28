import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/admin/', // Set the base path for all assets
  plugins: [react()]
})
