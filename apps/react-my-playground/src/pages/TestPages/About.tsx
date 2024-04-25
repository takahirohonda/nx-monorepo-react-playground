import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { Button } from './components/Button'
import { useGetRouterState } from './hooks/useGetRouterState'
import { useUpdateRouterState } from './hooks/useUpdateRouterState'

const LocationTracker = () => {
  const location = useLocation()
  useEffect(() => {
    console.log('state', location.state)
  }, [location])
  return null
}

export const About = () => {
  const { updateRouterState } = useUpdateRouterState()
  const { state } = useGetRouterState()

  const booleanValue = !state?.usefulBooleanValue

  return (
    <div className="flex-col">
      <h1 className="text-2xl">About Page</h1>
      <div className="my-8">
        <Button
          text="Update Router State"
          variant="primary"
          onClick={() =>
            updateRouterState({
              testState: 'state 2',
              usefulBooleanValue: booleanValue,
            })
          }
        />
      </div>
      <div className="my-8">
        <p>Router State: {JSON.stringify(state)}</p>
      </div>
      <LocationTracker />
    </div>
  )
}
