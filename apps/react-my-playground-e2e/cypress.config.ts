import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset'

import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run react-my-playground:serve',
        production: 'nx run react-my-playground:preview',
      },
      ciWebServerCommand: 'nx run react-my-playground:serve-static',
    }),
    specPattern: 'apps/react-my-playground-e2e/src/**/*.{js,ts,jsx,tsx}',
    baseUrl: 'http://localhost:4200',
    supportFile: 'apps/react-my-playground-e2e/src/support/e2e.ts',
  },
})
