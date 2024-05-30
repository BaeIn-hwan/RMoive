import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Routes from "@/routes";

import { ThemeProvider } from "styled-components";
import { themes } from "@/styles/modules/colors";
import { GlobalStyle } from "@/styles";
import "swiper/css";

const router = createBrowserRouter(Routes());
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={themes}>
          <GlobalStyle />
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
