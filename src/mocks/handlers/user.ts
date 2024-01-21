import { delay } from '@/utils'
import { http, HttpResponse } from 'msw'

const handlers = []

const login = http.post('/api/login', async (ctx) => {
  const body = await ctx.request.json()
  console.log('REQUEST BODY : ', body)
  await delay(1000)

  return HttpResponse.json({
    message: '로그인 성공',
    data: {
      token: 'mock-access-token', // todo : 이거 headers.authorization에 넣어야함..! 어떻게 하지?
    },
  })
})

const auth = http.get('/api/auth', async (ctx) => {
  const headers = ctx.request.headers
  console.log('REQUEST HEADERS : ', headers.get('authorization'))
  await delay(3000)

  return HttpResponse.json({
    message: '인증 성공, 사용자 정보를 반환합니다',
    data: {
      userId: 'foo-bar',
      nickname: 'Super Hector',
      email: 'peace@super.com',
      profileImageUrl: '/abby.svg',
    },
  })
})

handlers.push(login)
handlers.push(auth)

export const userHandlers = handlers
