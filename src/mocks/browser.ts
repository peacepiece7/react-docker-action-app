import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'

/**
 * @see https://mswjs.io/docs/integrations/browser
 */
export const worker = setupWorker(...handlers)
