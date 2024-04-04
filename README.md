# Nx Integrated Monorepo Playground - React

## (1) Get Started

## Notes

## Commands from auto-generated README.md

```bash
# Commands from auto generated README.md
npx nx serve new # Start the dev server
npx nx build new # Build the new app.
npx nx <target> <project> <...options> # To execute tasks with Nx
npx nx run-many -t <target1> <target2> # Run multiple targets
npx nx run-many -t <target1> <target2> -p <proj1> <proj2> # -p to filter projects
npx nx graph # show the graph of the workspace -> see https://nx.dev/core-features/explore-graph
```

## Nx Tasks

https://nx.dev/features/run-tasks

Nx tasks can be
(1) created from existing package.json scripts,
(2) inferred from tooling configuration files (https://nx.dev/concepts/inferred-tasks),
(3) or defined in a project.json file.

Nx will merge all three sources together to determine the tasks for a particular project.

## Add more plugins

We can just add plugins to the workspace. `@nx/vite` comes with vite tests by default. So, we can just add jest test.

```bash
yarn add @nx/jest
```

## Generating Projects

```bash
yarn nx generate @nx/react:app myapp
```

## Steps that I used to migrate `react-my-playground` into this monorepo.

(1) Run Nx command to get the repo ready.

```bash
# We need jest plugin: https://nx.dev/nx-api/jest
yarn add @nx/jest
# then generate react-my-playground
yarn nx generate @nx/react:app react-my-playground
```

The `nx generate` command created the project in the root folder, not apps folder. So, I moved the folder in `apps` and changed `sourceRoot` in `project.json` to `"sourceRoot": "apps/react-my-playground/src",` (it didn't have apps in the path). I also had to change the tsconfig.bas path to ` "extends": "../../tsconfig.base.json"`.

(2) Copy & Paste the entire code and config from `react-my-playground`.

(3) Add missing dependencies by yarn install at the root level.
