import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    font-family: Arial, sans-serif;
    background-color: #FAF8FF
  }
`
export default GlobalStyle
