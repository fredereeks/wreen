import { Titillium_Web, Exo_2, } from 'next/font/google'
// import localFont from 'next/font/local'


// define your variable fonts
const titilium = Titillium_Web({ subsets: ["latin"], weight: ['200', '300', '400', '600', '700', '900'] })
const exo2 = Exo_2({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '100', '600', '700', '800'] })
// define 2 weights of a non-variable font
// const sourceCodePro400 = Source_Sans_3({ weight: '400' })
// const sourceCodePro700 = Source_Sans_3({ weight: '700' })
// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
// const greatVibes = localFont({ src: './GreatVibes-Regular.ttf' })
 
export { titilium, exo2,  }