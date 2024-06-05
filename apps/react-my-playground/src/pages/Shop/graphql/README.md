## Get cart

```graphql
query getCart($entityId: String = "c2195e0a-1cee-47c0-9a3a-ea9dd2cd46fd") {
  site {
    cart(entityId: $entityId) {
      entityId
      lineItems {
        physicalItems {
          name
          quantity
        }
      }
    }
  }
}

query getAllCartItems {
  site {
    cart {
      entityId
      lineItems {
        physicalItems {
          name
          quantity
        }
      }
    }
  }
}
```

## Get checkout

```graphql
query getCheckout {
  site {
    checkout {
      entityId
    }
  }
}
```

## Delete Cart

```graphql
mutation deleteCart($deleteCartInput: DeleteCartInput!) {
  cart {
    deleteCart(input: $deleteCartInput) {
      deletedCartEntityId
    }
  }
}

{
  "deleteCartInput": {
    "cartEntityId": "426f0201-67a3-4650-b7e7-157c32223668"
  }
}
```

# 1. Create cart

```graphql
mutation createCartSimple($createCartInput: CreateCartInput!) {
  cart {
    createCart(input: $createCartInput) {
      cart {
        entityId
        lineItems {
          physicalItems {
            name
            quantity
          }
          digitalItems {
            name
            quantity
          }
          giftCertificates {
            name
          }
          customItems {
            name
            quantity
          }
        }
      }
    }
  }
}
```

```json
{
  "createCartInput": {
    "lineItems": [
      {
        "quantity": 1,
        "productEntityId": 141
      },
      {
        "quantity": 1,
        "productEntityId": 142
      }
    ]
  }
}
```

# 2. Add Billing Address

```graphql
mutation addCheckoutBillingAddress($addCheckoutBillingAddressInput: AddCheckoutBillingAddressInput!) {
  checkout {
    addCheckoutBillingAddress(input: $addCheckoutBillingAddressInput) {
      checkout {
        entityId
      }
    }
  }
}
```

```json
{
  "addCheckoutBillingAddressInput": {
    "checkoutEntityId": "b1b5f8c9-706c-42fd-8eee-a3572a9418ea",
    "data": {
      "address": {
        "firstName": "Joe",
        "lastName": "Blogs",
        "email": "joe@example.com",
        "company": "BlogIndustries",
        "address1": "123 Yar st",
        "address2": "",
        "city": "Melbourne",
        "stateOrProvince": "VIC",
        "countryCode": "AU",
        "postalCode": "94061",
        "phone": "0413206910",
        "shouldSaveAddress": false
      }
    }
  }
}
```

# 3. Add consignment

```graphql
mutation addCheckoutShippingConsignments($addCheckoutShippingConsignmentsInput: AddCheckoutShippingConsignmentsInput!) {
  checkout {
    addCheckoutShippingConsignments(input: $addCheckoutShippingConsignmentsInput) {
      checkout {
        entityId
        shippingConsignments {
          entityId
          availableShippingOptions {
            entityId
          }
          selectedShippingOption {
            entityId
          }
        }
      }
    }
  }
}
```

```json
{
  "addCheckoutShippingConsignmentsInput": {
    "checkoutEntityId": "b1b5f8c9-706c-42fd-8eee-a3572a9418ea",
    "data": {
      "consignments": [
        {
          "address": {
            "firstName": "Joe",
            "lastName": "Blogs",
            "email": "joe@example.com",
            "address1": "123 Yar st",
            "address2": "",
            "city": "Melbourne",
            "stateOrProvince": "Victoria",
            "stateOrProvinceCode": "VIC",
            "countryCode": "AU",
            "postalCode": "94061",
            "phone": "0413206910",
            "shouldSaveAddress": false
          },
          "lineItems": [
            {
              "lineItemEntityId": "3a70fab2-03db-4af0-8a05-ddb90883401b",
              "quantity": 1
            },
            {
              "lineItemEntityId": "c495621a-38ef-4d7b-bb64-97e05b658d1c",
              "quantity": 1
            }
          ]
        }
      ]
    }
  }
}
```

# 4. Complete Checkout

```graphql
mutation completeCheckout($completeCheckoutInput: CompleteCheckoutInput!) {
  checkout {
    completeCheckout(input: $completeCheckoutInput) {
      orderEntityId
      paymentAccessToken
    }
  }
}
```

```json
{
  "completeCheckoutInput": {
    "checkoutEntityId": "b1b5f8c9-706c-42fd-8eee-a3572a9418ea"
  }
}
```
