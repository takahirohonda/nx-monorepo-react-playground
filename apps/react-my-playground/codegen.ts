import { CodegenConfig } from "@graphql-codegen/cli";
import { GRAPHQL_ENDPOINT, API_TOKEN } from './tmp/coden-const'
import updateGqlDocumentNodes from './script/codegen/updateGqlDocumentNode'
const config: CodegenConfig = {
  schema: {
    [GRAPHQL_ENDPOINT]: {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`
      }
    }
  },
  documents: [
    'apps/react-my-playground/src/**/*.graphql'
  ],
  generates: {
    "./src/generated/": {
      preset: "client",
    },
    "apps/react-my-playground/src/types/gql-global-types.ts": {
      plugins: ['typescript'],
      config: {},
    },
    "apps/react-my-playground/src": {
      hooks: {
        beforeOneFileWrite: updateGqlDocumentNodes,
      },
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: 'types/gql-global-types',
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      // Maintainers reason why generated types are not flattened
      config: {
        avoidOptionals: true,
        operationResultSuffix: 'Response',
        documentVariableSuffix: '',
        fragmentVariableSuffix: 'Doc',
        dedupeOperationSuffix: true,
        withHooks: true,
        // To make existing ID typing work
        scalars: {
          ID: {
            input: 'string',
            output: 'string',
          },
        },
      },
    }

  },
};

export default config;