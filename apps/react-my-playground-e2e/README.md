# Adding testing-library support

https://testing-library.com/docs/cypress-testing-library/intro

```bash
yarn add -D @testing-library/cypress

```

# Nx cypress apis

https://nx.dev/nx-api/cypress

# command

```bash

yarn nx e2e react-my-playground-e2e
yarn nx cy-panel react-my-playground-e2e
```

## Setting up

### 1. using cypress panel

We need to add `specPattern` and `supoortFile` in `cypress.config.ts`.

```ts
specPattern: 'apps/react-my-playground-e2e/src/**/*.{js,ts,jsx,tsx}',
baseUrl: 'http://localhost:4200',
supportFile: 'apps/react-my-playground-e2e/src/support/e2e.ts',
```

Then add the target in `project.json`

```json
"cy-panel": {
  "executor": "nx:run-commands",
  "options": {
    "command": "yarn cypress open --config-file apps/react-my-playground-e2e/cypress.config.ts"
  }
}
```
