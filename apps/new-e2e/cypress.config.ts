import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run new:serve',
        production: 'nx run new:preview',
      },
      ciWebServerCommand: 'nx run new:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
