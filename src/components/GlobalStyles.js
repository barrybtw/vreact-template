import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Batik;
    src: url('./../src/fonts/Batik.otf');
  }
  @font-face {
    font-family: Floral;
    src: url('./../src/fonts/Floral.otf');
  }
  @font-face {
    font-family: Floralbold;
    src: url('./../src/fonts/FloralBold.otf');
  }
  @font-face {
    font-family: Hokusai;
    src: url('./../src/fonts/Hokusai.ttf');
  }

  body {
   background-color: rgba(250, 250, 250, 0.967);
  }
`;
