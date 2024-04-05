import { createGlobalStyle } from "styled-components";
import { Reset } from "./modules/reset";
import { themes } from "./modules/colors";

export const GlobalStyle = createGlobalStyle`
  ${Reset}

  .blind {
    overflow: hidden;
    position: absolute;
    width: 1px;
    height: 1px;
    clip: rect(1px, 1px, 1px, 1px);
  }

  body {
    background-color: ${themes.colors.background};
  }

  #root {
    width: 100%;
  }
`;
