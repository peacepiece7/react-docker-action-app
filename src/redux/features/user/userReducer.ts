import { IUser } from '@/models/user'
import { createSlice } from '@reduxjs/toolkit'
import { removeCookie } from '@/utils'
import { ACCESS_TOKEN } from '@/constants'

import { fetchUserThunk } from './userThunk'
import { RootState } from '@/redux/store'

export interface UserState {
  user: IUser
  status: ExtraReducerStatus
  isLogin: boolean
}
const initialState: UserState = {
  user: {} as IUser,
  status: 'pending',
  isLogin: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserThunk.pending, (state) => {
      state.status = 'pending'
    })
    builder.addCase(fetchUserThunk.fulfilled, (state, action) => {
      state.status = 'fulfilled'
      state.user = action.payload
      state.isLogin = true
    })
    builder.addCase(fetchUserThunk.rejected, (state) => {
      state.status = 'rejected'
      state.user = {} as IUser
      state.isLogin = false
      removeCookie(ACCESS_TOKEN)
    })
  },
})

export const selectUser = (state: RootState) => state.user
export default userSlice.reducer
