import { combineReducers } from '@reduxjs/toolkit'
import todoReducer from './todos/todoReducer'
import userReducer from './user/userReducer'

export default combineReducers({
  user: userReducer,
  todos: todoReducer,
})

/**
 * * Mather Utils
 * @description isAllOf, isAnyOf, isNoneOf, isFullfilled, isRejected, isPending
 * @see https://redux-toolkit.js.org/api/matching-utilities
 */
