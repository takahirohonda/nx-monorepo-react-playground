// const isProtectedRoute = createRouteMatcher(['/journal'])

import { clerkMiddleware } from '@clerk/nextjs/server'

// export default clerkMiddleware(
//   (auth, req) => {
//     console.log(JSON.stringify(auth()))
//     // if (isProtectedRoute(req)) auth().protect()
//   },
//   { debug: true }
// )

// authMiddleware doesn't work either.
export default clerkMiddleware({ debug: true })

export const config = {
  // The following matcher runs middleware on all routes expect static assets.
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
