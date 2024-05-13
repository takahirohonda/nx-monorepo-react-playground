## Reference

### 1. Reading values from .env file.

Vite exposes env variables on the special import.meta.env object (https://vitejs.dev/guide/env-and-mode). Add `.env` file and use the value as `import.meta.env.VITE_CUSTOM_VALUE`. Note that the env variable needs to be prefixed with `VITE_`

```
VITE_BIGCOMMERCE_CANONICAL_STORE_DOMAIN="mybigcommerce.com"
VITE_BIGCOMMERCE_API_URL="https://api.bigcommerce.com"
VITE_BIGCOMMERCE_CDN_HOSTNAME="*.bigcommerce.com"
```

### 2. Apollo Codegen

https://www.apollographql.com/tutorials/lift-off-part1/09-codegen


```bash
yarn add -D @graphql-codegen/cli @graphql-codegen/client-preset
yarn add @apollo/client graphql
```

This starter repo has codegen: https://github.com/storyblok/nextjs-bigcommerce-starter/blob/master/codegen.json

