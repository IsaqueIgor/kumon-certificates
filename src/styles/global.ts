import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
    height: 100%;

    @media (min-width: 1981px) {
      font-size: 80%;
    };
  }

  body {
    background: ${({ theme }) => theme.colors.lightGrey};
    color: ${({ theme }) => theme.colors.grey};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
  }

  body, #root {
    min-height: 100vh;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  @font-face {
    font-family: 'Updock', cursive;
    src: local('Updock-Regular'), url(./fontsUpdock-Regular.ttf);
  }

  @font-face {
    font-family: 'Water Brush', cursive;
    src: local('WaterBrush-Regular'), url(./WaterBrush-Regular.ttf);
  }

  @font-face {
    font-family: 'Pacifico', cursive;
    src: local('Pacifico-Regular'), url(./Pacifico-Regular.ttf);
  }

  @font-face {
    font-family: 'Whisper', cursive;
    src: local('Whisper-Regular'), url(./Whisper-Regular.ttf);
  }



    body, input, button {
    font: 1.6rem 'Lato', -apple-system, BlinkMacSystemFont,"Futura ExtraBold", Arial, Helvetica, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    line-height: 1.48;
  }


  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  a {
    text-decoration: none;
    background: none;
    font-weight: 700;
    cursor: pointer;
    border: 0;
    transition: 180ms ease-in-out;
  }

    button {
    cursor: pointer;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul {
    list-style: none;
    text-align: left;
    padding: 0;
  }
`;
