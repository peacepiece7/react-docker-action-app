import { ACCESS_TOKEN } from '@/constants'
import { getCookie } from '@/utils'
import axios from 'axios'

export const signedAPI = axios.create({
  baseURL: `http://localhost:${import.meta.env.PORT || 5173}`,
})

export const publicAPI = axios.create({
  baseURL: `http://localhost:${import.meta.env.PORT || 5173}`,
})

signedAPI.interceptors.request.use((config) => {
  const token = getCookie(ACCESS_TOKEN)
  if (!token) throw new Error('로그인 후 이용해주세요.')
  config.headers['Authorization'] = `Bearer ${token}`
  return config
})
