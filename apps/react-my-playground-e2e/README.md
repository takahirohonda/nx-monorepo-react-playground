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

## 2. Adding testing-library support

https://testing-library.com/docs/cypress-testing-library/intro

```bash
yarn add -D @testing-library/cypress
```

# REFERENCE

[Laika](https://zendesk.github.io/laika/docs/api/)

[Nx cypress apis](https://nx.dev/nx-api/cypress)

[Intercept GraphQL request](https://enlear.academy/intercept-graphql-requests-in-cypress-c1085eafb517)
[Another one](https://betterprogramming.pub/intercepting-graphql-requests-with-cypress-99984d6d500c)
