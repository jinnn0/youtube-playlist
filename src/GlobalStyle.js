import { createGlobalStyle } from 'styled-components';

export const colors = {
  toggleModeBg: '#505770',
  activeGreen: '#4b965f'
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
