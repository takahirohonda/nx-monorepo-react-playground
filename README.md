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

Add `setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],` to `apps/react-my-playground/jest.config.ts` so that the test uses react-testing-library.

(2) Copy & Paste the entire code from from `react-my-playground`. Not the config.

(3) Add missing dependencies by yarn install at the root level.

```bash
yarn add clsx zod styled-components msw formik
yarn add @mui/material @emotion/react @emotion/styled
```

## Troubleshooting

Jest doesn't run by using what Nx doc says.

- (1) Setup project

```bash
cd apps
nx g @nx/react:application
nx g @nx/jest:configuration --project=jest-setup

# this runs when I remove css import
yarn nx run jest-setup:test
```

- (2) configure jest-dom with testing library
  Then, add `setupTests.ts` in `src`.

```ts
import '@testing-library/jest-dom';
```

Then add this line in `jest.config.ts`.

```ts
 setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
```

- (3) Add css module & jest-dom types

Add this line in `tsconfig.spec.json`

```json
{
...
// jest and node types are added by default
 "types": ["jest", "node",
    // these two lines should be added
    "@nx/react/typings/cssmodule.d.ts",
    "@testing-library/jest-dom"
    ]
}
```

For the react-my-playground project, I set the compiler option `"jsx": "react"`. It has to be `"jsx":"react-jsx"` .
