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

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  build: {
    outDir: '../../dist/apps/learn-german',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      input: {
        main: './index.html',
        about: './verbs.html',
        contact: './simple-expressions.html',
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
    // {
    //   name: 'collect-build-files',
    //   generateBundle(options, bundle) {
    //     // Array to store the file names
    //     const files = []

    //     // Iterate through the bundle object to collect file names
    //     for (const fileName in bundle) {
    //       if (Object.prototype.hasOwnProperty.call(bundle, fileName)) {
    //         files.push(fileName)
    //       }
    //     }

    //     const outDir = options.dir || 'dist'
    //     const outputPath = path.resolve(outDir, 'build-files.js')
    //     const fileContent = `export const buildFiles = ${JSON.stringify(files, null, 2)};`

    //     fs.writeFileSync(outputPath, fileContent, 'utf-8')

    //     console.log(`Build files array written to: ${outputPath}`)
    //   },
    // },
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
