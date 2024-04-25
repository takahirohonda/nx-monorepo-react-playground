import {
  BrowserRouter,
  createMemoryRouter,
  MemoryRouter,
  Route,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { About } from './About'
import { createRouteTestingWrapper } from './test-utils/createRouteTestingWrapper'

describe('About', () => {
  it('should change the router state - with MemoryRouter', async () => {
    const user = userEvent.setup()
    render(<About />, { wrapper: MemoryRouter })
    await user.click(
      screen.getByRole('button', { name: /update router state/i })
    )
    expect(
      screen.getByText(/{"testState":"state 2","usefulBooleanValue":true}/i)
    ).toBeVisible()
  })

  it('should change the router state - with BrowserRouter', async () => {
    const user = userEvent.setup()
    render(<About />, { wrapper: BrowserRouter })
    await user.click(
      screen.getByRole('button', { name: /update router state/i })
    )
    expect(
      screen.getByText(/{"testState":"state 2","usefulBooleanValue":true}/i)
    ).toBeVisible()
  })

  it('should change the router state - access the router state', async () => {
    const user = userEvent.setup()
    const routeConfig: RouteObject[] = [
      {
        path: '/test',
        element: <About />,
      },
    ]
    const router = createMemoryRouter(routeConfig, {
      initialEntries: ['/test'],
    })

    render(<RouterProvider router={router} />)

    await user.click(
      screen.getByRole('button', { name: /update router state/i })
    )
    expect(
      screen.getByText(/{"testState":"state 2","usefulBooleanValue":true}/i)
    ).toBeVisible()

    expect(router.state.location.pathname).toBe('/test')
    expect(router.state.location.state).toEqual({
      myState: {
        testState: 'state 2',
        usefulBooleanValue: true,
      },
    })
  })

  it('should change the router state - new wrapper', async () => {
    const { Wrapper, getLocation } = createRouteTestingWrapper({})

    render(<Route path="/" element={<About />} />, { wrapper: Wrapper })
    const user = userEvent.setup()
    await user.click(
      screen.getByRole('button', { name: /update router state/i })
    )
    expect(
      screen.getByText(/{"testState":"state 2","usefulBooleanValue":true}/i)
    ).toBeVisible()

    expect(getLocation()?.pathname).toBe('/')
    expect(getLocation()?.state).toEqual({
      myState: {
        testState: 'state 2',
        usefulBooleanValue: true,
      },
    })
  })
})
