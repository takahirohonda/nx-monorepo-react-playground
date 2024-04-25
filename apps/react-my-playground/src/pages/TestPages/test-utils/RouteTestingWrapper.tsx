import {
  createMemoryRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

type RouteTestingWrapperProps = {
  children: React.ReactNode
  initialUrl: string
  initialState?: unknown
}

export const RouteTestingWrapper = ({
  children,
  initialUrl = '/',
  initialState,
}: RouteTestingWrapperProps) => {
  const routeConfig: RouteObject[] = [
    {
      path: initialUrl,
      element: children,
    },
  ]
  const router = createMemoryRouter(routeConfig, {
    initialEntries: [initialUrl],
  })

  if (initialState) {
    router.state.location.state = initialState
  }

  return <RouterProvider router={router} />
}
