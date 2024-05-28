import {
  BrowserRouter,
  createMemoryRouter,
  MemoryRouter,
  Route,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { About } from './About'
import { createRouteTestingWrapper } from './test-utils/createRouteTestingWrapper'

describe('About', () => {
  it('should change the router state - with MemoryRouter', async () => {
    const user = userEvent.setup()

    render(<About />, { wrapper: MemoryRouter })

    act(() => {
      user.click(screen.getByRole('button', { name: /update router state/i }))
    })

    await (() => {
      expect(
        screen.getByText(/{"testState":"state 2","usefulBooleanValue":true}/i)
      ).toBeVisible()
    })
  })

  it('should change the router state - with BrowserRouter', async () => {
    const user = userEvent.setup()
    render(<About />, { wrapper: BrowserRouter })

    act(() => {
      user.click(screen.getByRole('button', { name: /update router state/i }))
    })

    await (() => {
      expect(
        screen.getByText(/{"testState":"state 2","usefulBooleanValue":true}/i)
      ).toBeVisible()
    })
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
    act(() => {
      user.click(screen.getByRole('button', { name: /update router state/i }))
    })

    expect(
      await screen.findByText(
        /{"testState":"state 2","usefulBooleanValue":true}/i
      )
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

    act(() => {
      user.click(screen.getByRole('button', { name: /update router state/i }))
    })
    expect(
      await screen.findByText(
        /{"testState":"state 2","usefulBooleanValue":true}/i
      )
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
