import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: 'jsdom',
    // hey! 👋 over here
    globals: true,
    setupFiles: './tests/setup.ts',
    coverage: {
      exclude: ['node_modules', 'tests'],
      reporter: ['html', 'cobertura'],
    },
  },
})
