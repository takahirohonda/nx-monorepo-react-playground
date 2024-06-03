const axios = require('axios')

const { X_AUTH_TOKEN, STORE_HASH } = require('../tmp/fetch-token-const')
// const fetch = require('node-fetch');

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
  },
  body: {
    allowed_cors_origins: ['http://localhost:4200'],
    channel_id: 1,
    expires_at: unixTimestamp,
  },
}

// axios.get('https://fake-json-api.mock.beeceptor.com/users')
//   .then((data) => console.log(data))

axios
  .post(url, options.body, { headers: options.headers })
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.error(error)
  })
