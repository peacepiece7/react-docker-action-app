// * title에 gradient효과를 주기 위해 사용하는 함수입니다.
export default async function changeTextColor(targetSelector: string, ms: number) {
  setInterval(() => {
    Array.from(document.querySelectorAll(targetSelector)).map((e, idx) => {
      setTimeout(() => e.classList.toggle('transitionOn'), 500 * idx)
    })
  }, ms)
}
