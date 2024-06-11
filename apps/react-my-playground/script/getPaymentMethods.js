const axios = require('axios')

const { X_AUTH_TOKEN, STORE_HASH } = require('../tmp/fetch-token-const')

const CHECKOUT_ID = '016fd2ac-155f-410b-8f4c-1b29a12916b5'
const CHECKOUT_ID_PARAM = `?checkout_id=${CHECKOUT_ID}`
const url = `https://api.bigcommerce.com/stores/${STORE_HASH}/v3/payments/methods${CHECKOUT_ID_PARAM}`

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

// response:  { data: [], meta: {} }
