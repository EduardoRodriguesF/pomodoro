import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #f4f4f4;
  }
  * {
    padding: 0;
    margin: 0;
  }
  
  body, button, input {
    color: #1b2530;
    font-size: 16px;
    font-family: 'Poppins', 'Open-Sans', Helvetica, Sans-Serif;
  }

  button, input {
    border: none;
    background: transparent;
  }

  button { 
    cursor: pointer;
  }
`;

export default GlobalStyle;
