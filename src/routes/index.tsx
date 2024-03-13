import { RouteObject } from "react-router-dom";

import DefaultLayout from "@/layouts/Default";

import Main from "@/pages/Main";
// import CategoryList from "@/pages/CategoryList";
import MovieDetail from "@/pages/MovieDetail";
import ScrollTop from "./ScrollTop";
// import Test from "@/pages/Test";

const moives: RouteObject[] = [
  {
    path: "/",
    element: <Main />,
    index: true,
  },
  // {
  //   path: "/:type",
  //   element: <CategoryList />,
  // },
  {
    path: "/:type/:id",
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
