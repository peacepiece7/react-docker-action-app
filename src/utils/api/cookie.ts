/**
 * @description 쿠키를 저장합니다.
 */
export const setCookie = (key: string, value: string, days: number) => {
  const exdate = new Date()
  exdate.setDate(exdate.getDate() + days)
  const cookietValue =
    decodeURIComponent(value) + (days && `; expires=${exdate.toUTCString()}`)
  document.cookie = `${key}=${cookietValue}`
}

/**
 * @description 쿠키를 가져옵니다.
 */
export const getCookie = (key: string) => {
  const cookies = decodeURIComponent(document.cookie).split(';')
  for (const c of cookies) {
    let cookie = c
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1)
    }
    if (cookie.indexOf(`${key}=`) === 0) {
      return cookie.substring(`${key}=`.length, cookie.length)
    }
  }
  return ''
}

/**
 * @description 쿠키의 만료일을 1970.1.1로 설정하여 쿠키를 삭제합니다.
 * @warn 만료일은 매직 넘버가 될 수 있습니다. 주의해주세요.
 */
export const removeCookie = (key: string) => {
  const initialExpireDate = 'expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  document.cookie = `${key}=; ${initialExpireDate}`
}
