import { createGlobalStyle } from 'styled-components'
import background from '../assets/img/background-chat3.jpg'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-image: url(${background});
  background-size: cover;
}`
