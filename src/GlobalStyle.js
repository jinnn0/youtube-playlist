import { createGlobalStyle } from 'styled-components';

export const colors = {
  toggleGreen: 'rgb(64, 80, 64)',
  activeGreen: 'rgb(75, 150, 95)'
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-size: 10px;
    font-family: 'Hind', sans-serif;
  }

  .App {
    min-height: 100vh;
    display:flex;
    align-items: center;
    justify-content: center;
  }
`;

export default GlobalStyle;
