import { Navigate, RouteObject } from 'react-router-dom'

import { CardListPageTest } from '../CardListPageTest/CardListPageTest'
import { MswTest } from '../msw-test/MswTest'
import { MultiStepForm } from '../MultiStepForm/MultiStepForm'
import { ROOT } from './routes'

export const subRouteConfig: RouteObject[] = [
  {
    path: ROOT.EXPERIMENTS.path,
    element: <Navigate to={ROOT.EXPERIMENTS.MULTI_STEP_FORM.path} />,
  },
  {
    path: ROOT.EXPERIMENTS.MULTI_STEP_FORM.path,
    element: <MultiStepForm />,
  },
  {
    path: ROOT.EXPERIMENTS.CARD_LIST_PAGE_TEST.path,
    element: <CardListPageTest />,
  },
  {
    path: ROOT.EXPERIMENTS.MSW_TEST.path,
    element: <MswTest />,
  },
]
