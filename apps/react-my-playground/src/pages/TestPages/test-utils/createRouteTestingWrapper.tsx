import { useEffect, useMemo } from 'react'
import {
  createMemoryRouter,
  createRoutesFromElements,
  RouterProvider,
  RouterProviderProps,
} from 'react-router-dom'

const Wrapper = ({
  children,
  stateRef,
  initialUrl = '/',
  initialState,
}: {
  children?: React.ReactNode
  stateRef: { current: RouterProviderProps['router'] | null }
  initialUrl: string
  initialState?: unknown
}) => {
  const router = useMemo(
    () =>
      createMemoryRouter(createRoutesFromElements(children), {
        initialEntries: [initialUrl],
      }),
    [children, initialUrl]
  )

  useEffect(() => {
    // eslint-disable-next-line no-param-reassign
    stateRef.current = router
    if (initialState) {
      router.state.location.state = initialState
    }
  })

  return <RouterProvider router={router} />
}

type CreateRouteTestingWrapperArgs = {
  initialUrl?: string
  initialState?: unknown
}

export const createRouteTestingWrapper = ({
  initialUrl = '/',
  initialState,
}: CreateRouteTestingWrapperArgs) => {
  const stateRef: {
    current: RouterProviderProps['router'] | null
  } = {
    current: null,
  }

  return {
    Wrapper: ({ children }: { children?: React.ReactNode }) => {
      return (
        <Wrapper
          stateRef={stateRef}
          initialUrl={initialUrl}
          initialState={initialState}
        >
          {children}
        </Wrapper>
      )
    },
    getLocation: () => stateRef.current?.state.location,
  }
}
