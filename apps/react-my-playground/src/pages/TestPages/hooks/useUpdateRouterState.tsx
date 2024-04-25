import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { RouterTestStateSchemaType } from './useGetRouterState'

export const useUpdateRouterState = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const updateRouterState = useCallback(
    (state: RouterTestStateSchemaType['myState'] | null, path?: string) => {
      navigate(path ?? location.pathname, {
        state: { myState: state },
      })
    },
    [navigate, location]
  )

  return { updateRouterState }
}
