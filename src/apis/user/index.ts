import { IUser } from '@/models/user'
import { publicAPI, signedAPI } from '..'

interface LoginResponse {
  user: { token: string }
  message: string
}
export const loginAPI = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const response = await publicAPI('/api/login', {
    method: 'POST',
    data: {
      email,
      password,
    },
  })
  return {
    user: response.data.data,
    message: response.data.message,
  }
}
interface UserAUthResponse {
  user: IUser
  message: string
}
export const fetchUserAuthAPI = async (): Promise<UserAUthResponse> => {
  const response = await signedAPI('/api/auth')
  return {
    user: response.data.data,
    message: response.data.message,
  }
}
