import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// change to port 3000
// add to scripts, "start": "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
