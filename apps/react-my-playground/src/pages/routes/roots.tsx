import { Navigate, RouteObject } from 'react-router-dom'

import { Home } from '../Home/Home'
import { About } from '../TestPages/About'
import { Layout } from '../TestPages/components/Layout'
import { ErrorPage } from '../TestPages/ErrorPage'
import { HomeTestPages } from '../TestPages/HomeTestPages'
import { More } from '../TestPages/More'
import { Products } from '../TestPages/Products'
import { ROOT } from './routes'
import { subRouteConfig } from './subRouteConfig'
import { ShopPage } from '../Shop/ShopPage'
import { CheckoutPage } from '../Shop/CheckoutPage'

export const routeConfig: RouteObject[] = [
  {
    path: ROOT.path,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROOT.path,
        element: <Home />,
      },
      {
        path: ROOT.SHOP.path,
        element: <ShopPage />,
      },
      {
        path: ROOT.SHOP.CHECKOUT.path,
        element: <CheckoutPage />,
      },
    ],
  },

  {
    path: ROOT.TEST_PAGES.path,
    element: <Navigate to={ROOT.TEST_PAGES.HOME.relative} />,
  },
  {
    path: ROOT.TEST_PAGES.path,
    element: <Layout />,
    children: [
      {
        path: ROOT.TEST_PAGES.HOME.relative,
        element: <HomeTestPages />,
      },
      {
        path: ROOT.TEST_PAGES.ABOUT.relative,
        element: <About />,
      },
      {
        path: ROOT.TEST_PAGES.PRODUCTS.relative,
        element: <Products />,
      },
      {
        path: ROOT.TEST_PAGES.MORE.relative,
        element: <More />,
      },
    ],
  },

  ...subRouteConfig,
]
