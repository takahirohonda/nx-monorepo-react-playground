echo "🛠️  Generating typings from graphql-codegen ..."
yarn graphql-codegen --config $1/codegen.ts

echo ""
echo ""
echo "🌟 Formatting generated types ..."

yarn eslint \
  --fix \
  "$1"'/src/**/*.generated.ts'

yarn prettier \
  --write \
  --loglevel silent \
  "$1"'/src/**/*.generated.ts' \
  "$1"'/src/types/gql-global-types.ts'

echo ""
echo ""
echo "✅ All done!"