const { createGlobPatternsForDependencies } = require('@nx/react/tailwind')
const { join } = require('path')

const patterns = createGlobPatternsForDependencies(__dirname)
console.log(`Checking the glob pattern... ${JSON.stringify(patterns)}`)

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: true,
  },
  content: [
    join(__dirname, 'src/**/*.{ts,css,html}'),
    join(__dirname, 'index.html'),
    join(__dirname, '*.html'),
    ...createGlobPatternsForDependencies(__dirname),
    // './src/**/*.{ts,tsx,html}',
    // 'index.html',
  ],
  theme: {
    container: {
      center: true,
    },
  },
  plugins: [],
}
