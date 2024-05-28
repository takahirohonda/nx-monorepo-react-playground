import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import type { z } from 'zod'

type LocationState<TSchema extends z.ZodSchema | undefined> =
  TSchema extends z.ZodSchema ? z.infer<TSchema> | undefined : unknown

export const useLocationState = <
  TSchema extends z.ZodSchema | undefined = undefined,
>(
  schema?: TSchema
): LocationState<TSchema> => {
  const location = useLocation()
  const { state } = location
  return useMemo(() => {
    if (!schema) {
      return state as LocationState<TSchema>
    }
    const result = schema.safeParse(state)
    return (result.success ? result.data : undefined) as LocationState<TSchema>
  }, [state, schema])
}
