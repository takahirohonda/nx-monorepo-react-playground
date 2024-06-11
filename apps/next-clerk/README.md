# Testing Clerk

`auth()` doesn't work with next.js .

```bash

[clerk debug end: auth()] (@clerk/nextjs=5.1.4,next=14.2.0)
 GET / 200 in 3544ms
 GET / 200 in 129ms
[clerk debug start: auth()]
  Headers debug, {
    "authStatus": "signed-out",
    "authMessage": "",
    "authReason": "unexpected-error"
  }
  Options debug, {
    "authStatus": "signed-out",
    "apiUrl": "https://api.clerk.com",
    "apiVersion": "v1",
    "authMessage": "",
    "secretKey": "sk_test_*********GZi",
    "authReason": "unexpected-error"
  }
[clerk debug end: auth()] (@clerk/nextjs=5.1.4,next=14.2.0)
[clerk debug start: auth()]
  Headers debug, {
    "authStatus": "signed-out",
    "authMessage": "",
    "authReason": "unexpected-error"
  }
  Options debug, {
    "authStatus": "signed-out",
    "apiUrl": "https://api.clerk.com",
    "apiVersion": "v1",
    "authMessage": "",
    "secretKey": "sk_test_*********GZi",
    "authReason": "unexpected-error"
  }
[clerk debug end: auth()] (@clerk/nextjs=5.1.4,next=14.2.0)
```
