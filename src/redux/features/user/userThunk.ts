import { fetchUserAuthAPI } from '@/apis/user'
import { RootState } from '@/redux/store'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUserThunk = createAsyncThunk('user/fetchUser', async () => {
  const { user } = await fetchUserAuthAPI()
  return user
})

export const selectTodos = (state: RootState) => state.todos
