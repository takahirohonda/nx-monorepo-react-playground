export const MOCK_PRODUCT_ID = 141
export const MOCK_PRODUCT_ID_2 = 142

export const ADDRESS_DATA = {
  street1: '40 Mount Street',
  street2: 'Level 13',
  suburb: 'North Sydney',
  state: 'New South Wales',
  postcode: '2060',
}

export const PERSONAL_DATA = {
  firstName: 'firstname',
  lastName: 'lastname',
  email: 'email@mail.com',
  phone: '0500000000',
}

export const CART_LINE_ITEMS = [
  {
    productEntityId: MOCK_PRODUCT_ID,
    quantity: 1,
  },
  {
    productEntityId: MOCK_PRODUCT_ID_2,
    quantity: 2,
  },
]

export const MOCK_SHIPPING_ADDRESS = {
  address1: ADDRESS_DATA.street1,
  address2: ADDRESS_DATA.street2,
  city: ADDRESS_DATA.suburb,
  stateOrProvince: ADDRESS_DATA.state,
  postalCode: ADDRESS_DATA.postcode,
  countryCode: 'AU',
  firstName: PERSONAL_DATA.firstName,
  lastName: PERSONAL_DATA.lastName,
  email: PERSONAL_DATA.email,
  phone: PERSONAL_DATA.phone,
  shouldSaveAddress: false,
}

export const MOCK_PAYMENT_INSTRUMENT = {
  number: '4111 1111 1111 1111',
  cardHolderName: 'success',
  expiryMonth: 1,
  expiryYear: 2050,
  verificationValue: '703',
}
