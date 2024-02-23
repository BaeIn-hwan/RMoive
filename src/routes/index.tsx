import { RouteObject } from "react-router-dom";

import Main from "@/pages/Main";
import CategoryList from "@/pages/CategoryList";
import CategoryDetail from "@/pages/CategoryDetail";
import DefaultLayout from "@/layouts/Default";
import ScrollTop from "./ScrollTop";

const moives: RouteObject[] = [
  {
    path: "/",
    element: <Main />,
    index: true,
  },
  {
    path: "/:type",
    element: <CategoryList />,
  },
  {
    path: "/:type/:id",
    element: <CategoryDetail />,
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
  ];
};

export default routes;
