const axios = require('axios')

const {
  X_AUTH_TOKEN,
  STORE_HASH,
  ORDER_ID,
} = require('../tmp/fetch-token-const')

const ORDER_ID_PARAM = `?order_id=${ORDER_ID}`
const url = `https://api.bigcommerce.com/stores/${STORE_HASH}/v3/payments/methods/${ORDER_ID_PARAM}`

let options = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Auth-Token': X_AUTH_TOKEN,
  },
}

axios
  .get(url, { headers: options.headers })
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.error(error)
  })

// https://developer.bigcommerce.com/docs/rest-payments/methods#get-accepted-payment-methods
