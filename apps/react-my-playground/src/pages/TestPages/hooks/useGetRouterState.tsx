import { z } from 'zod'

import { useLocationState } from '../../routes/useLocationState'

const RouterStateSchema = z.enum(['state 1', 'state 2', 'state 3'])

export type RouterTestState = z.infer<typeof RouterStateSchema>

const RouterTestStateSchema = z.object({
  myState: z.object({
    testState: RouterStateSchema,
    usefulBooleanValue: z.optional(z.boolean()),
  }),
})

export type RouterTestStateSchemaType = z.infer<typeof RouterTestStateSchema>

export const useGetRouterState = (): {
  state: RouterTestStateSchemaType['myState'] | null
} => {
  const maybeState = useLocationState(RouterTestStateSchema)

  const state = maybeState?.myState ?? null
  return { state }
}
