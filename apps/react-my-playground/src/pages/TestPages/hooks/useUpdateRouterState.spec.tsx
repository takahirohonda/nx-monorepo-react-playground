import {
  createMemoryRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { RouterTestStateSchemaType } from './useGetRouterState'
import { useUpdateRouterState } from './useUpdateRouterState'

const Component = ({
  state,
  path,
}: {
  state: RouterTestStateSchemaType['myState']
  path: string
}) => {
  const { updateRouterState } = useUpdateRouterState()
  return (
    <>
      <button onClick={() => updateRouterState(state, path)} type="button">
        open
      </button>
      <div />
    </>
  )
}

const routeConfig: RouteObject[] = [
  {
    path: '/',
    element: <Component state={{ testState: 'state 1' }} path="/test" />,
  },
  {
    path: '/test',
    element: <div>test</div>,
  },
]
const router = createMemoryRouter(routeConfig, { initialEntries: ['/'] })

const TestComponentWithRouter = () => {
  return <RouterProvider router={router} />
}

describe('useUpdateRouterState', () => {
  it('should correctly update history state', async () => {
    render(<TestComponentWithRouter />)
    userEvent.click(screen.getByRole('button', { name: /open/i }))
    await waitFor(() => {
      expect(router.state.location.pathname).toBe('/test')
    })
    expect(router.state.location.state).toEqual({
      myState: { testState: 'state 1' },
    })
  })
})
