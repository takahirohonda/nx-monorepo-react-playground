/// <reference types='vitest' />
import { defineConfig } from 'vite'

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import { VitePWA } from 'vite-plugin-pwa'
import manifestObj from './manifest.json'

const isGitPageDeploy = Boolean(process.env.GIT_PAGE_DEPLOY)

export default defineConfig({
  base: isGitPageDeploy ? '/learn-german' : '',
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/learn-german',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  build: {
    outDir: '../../dist/apps/learn-german',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      input: {
        main: './index.html',
        verbs: './verbs.html',
        simpleExpressions: './simple-expressions.html',
        auxiliaryVerbs: './auxiliary-verbs.html',
        questions: './questions.html',
        conversations: './conversations.html',
      },
    },
  },
  plugins: [
    nxViteTsPaths(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: manifestObj as any,
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
    }),
  ],
  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/apps/learn-german',
      provider: 'v8',
    },
  },
})
