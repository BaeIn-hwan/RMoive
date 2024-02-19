import { DefaultTheme } from "styled-components";

export const themes: DefaultTheme = {
  colors: {
    text: "#fff",
    background: "#2a2a2a",
    primary: "#febe98",
  },

  primary1: "#1D5AFF",
  primary2: "#9AB9FF",
  primary3: "#DCE5F4",
  primary4: "#F5F9FF",
  gray90: "#242424",
  gray80: "#5F5F5F",
  gray50: "#898989",
  gray30: "#BCBCBC",
  gray20: "#DBDBDB",
  gray10: "#F0F0F0",
  warning1: "#FF3131",
  warning2: "#FFA8A8",
  warning3: "#FFF2F2",
  warning4: "#FFFAFA",
  white: "#FFF",
};

export type TypeTheme = typeof themes;
