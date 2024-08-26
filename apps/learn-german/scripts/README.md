# service worker

No longer necessary to write service worker files manually as we use the vite plugin. This folder is just for documentation.

# Generating a build file array

We could add a custom plug-in to generate a file that includes all the generated assets. `generateBundle` is a Vite API that can be called after the bundle is generated.

```ts
plugins: [
    nxViteTsPaths(),
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   manifest: manifestObj as any,
    //   workbox: {
    //     globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
    //   },
    // }),
    {
      name: 'collect-build-files',
      generateBundle(options, bundle) {
        const files = []

        for (const fileName in bundle) {
          if (Object.prototype.hasOwnProperty.call(bundle, fileName)) {
            files.push(fileName)
          }
        }

        const outDir = options.dir || 'dist'
        const outputPath = path.resolve(outDir, 'build-files.js')
        const fileContent = `export const buildFiles = ${JSON.stringify(files, null, 2)};`

        fs.writeFileSync(outputPath, fileContent, 'utf-8')

        console.log(`Build files array written to: ${outputPath}`)
      },
    },
  ],
```
