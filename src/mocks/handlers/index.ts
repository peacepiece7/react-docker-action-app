import { todoHandlers } from './todo'
import { userHandlers } from './user'

export const handlers = [...userHandlers, ...todoHandlers]
