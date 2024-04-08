import { RouteObject } from "react-router-dom";

import DefaultLayout from "@/layouts/Default";

import Main from "@/pages/Main";
import MovieDetail from "@/pages/MovieDetail";
import ScrollTop from "./ScrollTop";
import MovieSearch from "@/pages/MovieSearch";

const moives: RouteObject[] = [
  {
    path: "/",
    element: <Main />,
    index: true,
  },
  {
    path: "/search",
    element: <MovieSearch />,
  },
  {
    path: "/:type/detail/:id",
    element: <MovieDetail />,
  },
];

const routes = (): RouteObject[] => {
  return [
    {
      path: "/",
      element: (
        <ScrollTop>
          <DefaultLayout />
        </ScrollTop>
      ),
      children: [...moives],
    },
    // {
    //   path: "/test",
    //   element: <Test />,
    // },
  ];
};

export default routes;
