/**
 * postcss usage 참고 링크입니다.
 * https://github.com/postcss/postcss#usage
 */

const autoprefixer = require('autoprefixer')
const nested = require('postcss-nested')
const postcssImport = require('postcss-import')
const cssnano = require('cssnano')
const purgecss = require('@fullhuman/postcss-purgecss')

// const postcssPresetEnv = require('postcss-preset-env')
// const postcssSimpleVars = require('postcss-simple-vars')
// const postcssUrl = require('postcss-url')

// module.exports = {
//   // postcss plugins
//   // https://postcss.org/docs/postcss-plugins
//   plugins: [
//     // @import 키워드를 사용할 수 있습니다.
//     postcssImport,

//     // vender prifix를 자동으로 붙여줍니다.
//     autoprefixer,

//     // nested css을 사용할 수 있습니다.
//     nested,

//     // css를 압축합니다. (공백 제거)
//     // https://cssnano.co/docs/presets/
//     // ! nanocss기 동작하는지 확인이 안됩니다. css파일이 추가되면 제되로 동작하는지 확인해주세요.
//     cssnano({
//       preset: 'default',
//     }),

//     // 사용하지않는 css파일을 제거합니다. (tailwind같은 디자인 프레임워크를 사용할 때 유용할 것 같아서 예시로 넣었습니다.)
//     // https://purgecss.com/plugins/postcss.html
//     purgecss({
//       content: ['./dist/**/*.html', './dist/**/*.js'],
//     }),

//     // postcssPresetEnv,
//     // postcssSimpleVars,
//     // postcssUrl,
//   ],
// }

module.exports = {
  plugins: [
    // @import 키워드를 사용할 수 있습니다.
    postcssImport,

    // vender prifix를 자동으로 붙여줍니다.
    autoprefixer,
  ],
}
