# Setting up this repo

```bash
npx create-nx-workspace new

##### the option to set this up
NX   Let's create a new workspace [https://nx.dev/getting-started/intro]

✔ Which stack do you want to use? · react
✔ What framework would you like to use? · none
✔ Integrated monorepo, or standalone project? · integrated
✔ Application name · new
✔ Which bundler would you like to use? · vite
✔ Test runner to use for end to end (E2E) tests · cypress
✔ Default stylesheet format · css
✔ Do you want Nx Cloud to make your CI fast? · skip
```

```bash
# This sets up next js project. If you choose the root with apps/next-app at the last option,
# it creates next js project in the apps folder
yarn nx add @nx/next
yarn nx g @nx/next:app next-app

# Not successful at creating a gatsby project
yarn nx add @nx/gatsby
yarn nx g @nx/gatsby:app apps/gatsby-app # this is not working

# This works, too.
yarn nx g @nx/react:app react-app
```

## Errors

This can be solved by running `yarn nx add @nx/gatsby` first.

```bash
Cannot find module '@nx/gatsby/package.json'
```

`yarn nx g @nx/gatsby:app apps/gatsby-app` is not working... After the first option to choose stylesheet format, it errors whichever one I choose 😢

```bash
TypeError: Cannot read properties of undefined (reading 'styled-components')
    at Object.<anonymous> (/Users/taka/code/mdh/nx-next-gatsby-react-storybook-monorepo/node_modules/@nx/gatsby/src/utils/styles.js:9:53)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at Module.require (node:internal/modules/cjs/loader:1235:19)
    at Mod.require (/Users/taka/code/mdh/nx-next-gatsby-react-storybook-monorepo/node_modules/nx/bin/init-local.js:145:36)
    at require (node:internal/modules/helpers:176:18)
    at Object.<anonymous> (/Users/taka/code/mdh/nx-next-gatsby-react-storybook-monorepo/node_modules/@nx/gatsby/src/generators/application/application.js:7:18)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)
error Command failed with exit code 1.
```
