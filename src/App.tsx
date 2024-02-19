import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Routes from "@/routes";

import { ThemeProvider } from "styled-components";
import { themes } from "@/styles/modules/colors";
import { GlobalStyle } from "@/styles";

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
