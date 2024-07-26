const axios = require('axios')
const { X_AUTH_TOKEN, STORE_HASH } = require('../tmp/fetch-token-const')

const now = Date.now()
// Calculate the timestamp for 24 hours x 30 days from now (in milliseconds)
const twentyFourHoursLater = now + 24 * 60 * 60 * 1000 * 30
// Convert the timestamp to seconds (Unix timestamp is in seconds)
const unixTimestamp = Math.floor(twentyFourHoursLater / 1000)

const url = `https://api.bigcommerce.com/stores/${STORE_HASH}/v3/storefront/api-token`

const options = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Auth-Token': X_AUTH_TOKEN,
    // 'X-Bc-Customer-Id': v4(), // don't need to do it for anonymous perspective
  },
  body: {
    allowed_cors_origins: ['http://localhost:4200'],
    channel_id: 643938,
    expires_at: unixTimestamp,
  },
}

console.log(
  `checking the option for store token API call: ${JSON.stringify(options)}`
)

axios
  .post(url, options.body, { headers: options.headers })
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.error(error)
  })
