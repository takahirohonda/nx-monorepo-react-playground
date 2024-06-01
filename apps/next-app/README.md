# Getting started

Make sure to generate prisma client because this repo has multiple prisma clients and each project needs to generate own client.

```bash
# Generate client in node_module
yarn nx generate-prisma-client next-app-utils-prisma-client
# Then migrate
yarn nx migrate next-app-utils-prisma-client
```

# REFERENCE

## Getting Tailwind to work

1. add `postcss.config.js`
2. add `tailwind.config.js`
3. add import to `global.css`
