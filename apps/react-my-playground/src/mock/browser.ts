// https://mswjs.io/docs/migrations/1.x-to-2.x/
import { setupWorker } from 'msw/browser'

import { handlers } from './handlers'
// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers)
