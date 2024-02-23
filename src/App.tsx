import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routes from "@/routes";

import { ThemeProvider } from "styled-components";
import { themes } from "@/styles/modules/colors";
import { GlobalStyle } from "@/styles";
import "swiper/swiper-bundle.css";

const router = createBrowserRouter(Routes());

function App() {
  return (
    <>
      <ThemeProvider theme={themes}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
