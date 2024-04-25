# Nx Integrated Monorepo Playground - React

## (1) Get Started

```bash
yarn nx serve react-my-playground
yarn nx test react-my-playground

# alternative
yarn nx run react-my-playground:test

# clear cache
yarn nx reset
```

## Notes

### (1) Commands from auto-generated README.md

```bash
# Commands from auto generated README.md
npx nx serve new # Start the dev server
npx nx build new # Build the new app.
npx nx <target> <project> <...options> # To execute tasks with Nx
npx nx run-many -t <target1> <target2> # Run multiple targets
npx nx run-many -t <target1> <target2> -p <proj1> <proj2> # -p to filter projects
npx nx graph # show the graph of the workspace -> see https://nx.dev/core-features/explore-graph
```

### (2) Nx Tasks

https://nx.dev/features/run-tasks

Nx tasks can be
(1) created from existing package.json scripts,
(2) inferred from tooling configuration files (https://nx.dev/concepts/inferred-tasks),
(3) or defined in a project.json file.

Nx will merge all three sources together to determine the tasks for a particular project.

### (3) Add more plugins

We can just add plugins to the workspace. `@nx/vite` comes with vite tests by default. So, we can just add jest test.

```bash
yarn add @nx/jest
```

### (4) Generating Projects

```bash
yarn nx generate @nx/react:app myapp
```

### (5) Steps that I used to migrate `react-my-playground` into this monorepo.

(1) Run Nx command to get the repo ready.

```bash
# We need jest plugin: https://nx.dev/nx-api/jest
yarn add @nx/jest
# then generate react-my-playground (g stands for generate)
yarn nx g @nx/react:app apps/react-my-playground
# then set up tailwind
yarn nx g @nx/react:setup-tailwind react-my-playground
# Configure jest

yarn nx g @nx/jest:configuration --project react-my-playground
```

(2) Copy & Paste the entire code from from `react-my-playground`. Not the config.

(3) Add missing dependencies by yarn install at the root level.

```bash
yarn add clsx zod styled-components msw formik
yarn add @mui/material @emotion/react @emotion/styled
```

## Troubleshoot

original jest config

```ts
module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.stories.{ts,tsx}', '!src/**/*.styled.{ts,tsx}', '!src/components/PDF/PDF.ts', '!src/index.tsx', '!src/styles/*', '!src/types/*'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}', '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': 'ts-jest',
  },
  modulePaths: ['<rootDir>/src'],
  moduleFileExtensions: ['web.js', 'js', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'jsx', 'node'],

  resetMocks: true,
  clearMocks: true,
};
```
