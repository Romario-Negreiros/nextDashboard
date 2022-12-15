import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  html {
    font-size: 10px;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`
