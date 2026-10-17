import { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelho: '#E66767',
  creme: '#FFF8F2',
  bege: '#FFEBD9',
  branco: '#ffffff'
}

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${cores.creme};
    color: ${cores.vermelho};
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button,
  a {
    font-family: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  .container {
    margin: 0 auto;
    max-width: 1024px;
    width: 100%;
  }
`
