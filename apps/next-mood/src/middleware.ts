import { clerkMiddleware } from '@clerk/nextjs/server'

// const isProtectedRoute = createRouteMatcher(['/journal(.*)'])

// export default clerkMiddleware((auth, req) => {
//   if (isProtectedRoute(req)) auth().protect()
// })

// authMiddleware doesn't work either.
export default clerkMiddleware()

export const config = {
  // The following matcher runs middleware on all routes expect static assets.
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
