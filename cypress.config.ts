import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'src/**/*.spec.ts',
    viewportWidth: 1280,
    viewportHeight: 720,
  },
})
