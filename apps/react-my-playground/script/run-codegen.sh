echo "🔑 API Authenticaton ..."
echo "Please provide your accessToken from generateShopToken mutation."
read -p "Shop Token: " accessToken
export API_TOKEN=$accessToken

graphql-codegen --config ./apps/react-my-playground/codegen.ts