import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/exp-02/',  // Replace with your actual repo name
  plugins: [react()],
})
