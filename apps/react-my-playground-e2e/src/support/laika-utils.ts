import { InterceptApi, Laika } from '@zendesk/laika'

interface CreateInterceptorArgs {
  operationName: string
  laika: Laika
  fixture?: unknown
  variables?: unknown
}

export const createInterceptor = ({
  operationName,
  laika,
  fixture,
  variables,
}: CreateInterceptorArgs): InterceptApi => {
  const interceptor = laika.intercept({
    clientName: 'ecommerce',
    operationName,
  })

  // https://zendesk.github.io/laika/docs/api/classes/Laika.InterceptApi#disablenetworkfallback
  // If mocked results are not available, queries will not respond, causing page to hang
  // We want this as it will help catch missing mocks, rather than defaulting to network requests
  // Does not impact subscriptions
  interceptor.disableNetworkFallback()

  if (fixture) {
    interceptor.mockResultOnce(
      {
        result: fixture,
      },
      { variables }
    )
  }

  return interceptor
}

interface CreateCatchAllInterceptorArgs {
  laika: Laika
}

/**
 * Create interceptor to catch all un-mocked queries, and disable network fallback
 * This will force page to hang if a query is not mocked (as query will never resolve)
 * This forces all queries to be mocked, or the page will hang and fail the test.
 * This should be called after creating all other interceptors.
 */
export const createCatchAllInterceptor = ({
  laika,
}: CreateCatchAllInterceptorArgs): InterceptApi => {
  const catchAllInterceptor = laika.intercept({
    clientName: 'dashboard',
  })

  catchAllInterceptor.disableNetworkFallback()

  return catchAllInterceptor
}
