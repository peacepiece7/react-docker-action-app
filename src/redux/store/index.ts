import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import userReducer from '@/redux/features/user/userReducer'
import todoReducer from '@/redux/features/todos/todoReducer'
export const store = configureStore({
  reducer: {
    user: userReducer,
    todos: todoReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
