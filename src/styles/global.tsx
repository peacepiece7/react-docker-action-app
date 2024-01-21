import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { font } from './variable'

const { family } = font

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :root {
        /* 여기 선언해도 되는데 자동완성 기능을 찾지 못함 */
        --primary-color: #000;
    }
    html {
        /* 62.5% of 16px browser font size is 10px */
        /* 16px * 0.625 = 10px */
        /* https://www.aleksandrhovhannisyan.com/blog/62-5-percent-font-size-trick/ */
        font-size: 62.5%;
    }
    body {
        font-family: ${family.Helvetica}, ${family.Arial}, ${family.sansSerif};
        line-height: 1.5;
    }
    * {
        box-sizing: border-box;
    }
`
