import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher(['/admin(.*)'])

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect()
})
// authMiddleware doesn't work either.
// export default clerkMiddleware(
//   (auth, req) => {
//     console.log(`checkout auth(): ${JSON.stringify(auth())}`)
//     console.log(`checking req: ${JSON.stringify(req)}`)
//   },
//   { debug: true }
// )

export const config = {
  // The following matcher runs middleware on all routes expect static assets.
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
