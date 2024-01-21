import { worker } from '@/mocks/browser'
import { isAxiosError } from 'axios'

/**
 * 조건부 모킹 활성화
 * @see https://mswjs.io/docs/integrations/browser#conditionally-enable-mocking
 *
 * woker.start() API
 * @see https://mswjs.io/docs/api/setup-worker/start
 */
export const enableWorker = () => {
  if (import.meta.env.MODE === 'development') worker.start()
}

/**
 * @description Suspense를 사용하지 않는 경우 해당 함수를 사용하여 에러를 처리합니다.
 */
export async function to<T>(
  promise: Promise<T>
): Promise<[{ message: string } | null, T | null]> {
  try {
    const data = await promise
    const result: [null, T] = [null, data]
    return result
  } catch (error) {
    if (import.meta.env.MODE === 'development') console.error(error)
    if (
      !isAxiosError(error) ||
      typeof error !== 'object' ||
      !('message' in error)
    ) {
      return [{ message: '알 수 없는 에러가 발생했습니다.' }, null]
    }

    if (typeof error.response?.data.data === 'string') {
      return [{ message: error.response.data.data }, null]
    }

    if (typeof error.response?.data.message === 'string') {
      return [{ message: error.response.data.message }, null]
    }

    return [{ message: '알 수 없는 에러가 발생했습니다.' }, null]
  }
}
