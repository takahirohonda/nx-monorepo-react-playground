import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/*
 * middleware.ts should be inside src.
 * or at the same level as pages or app if applicable.
 * */
export const middleware = (request: NextRequest) => {
  return NextResponse.redirect(new URL('/todo', request.url))
}

export default middleware

export const config = {
  matcher: ['/redirect/:path*'],
}
