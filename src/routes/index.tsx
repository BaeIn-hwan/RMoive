import { RouteObject } from "react-router-dom";

import Main from "@/pages/Main";
import CategoryList from "@/pages/CategoryList";
import CategoryDetail from "@/pages/CategoryDetail";
import DefaultLayout from "@/layouts/Default";

const moives: RouteObject[] = [
  {
    path: "/",
    element: <Main />,
    index: true,
  },
  {
    path: "/:category",
    element: <CategoryList />,
  },
  {
    path: "/:category/:id",
    element: <CategoryDetail />,
  },
];

const routes = (): RouteObject[] => {
  return [
    {
      path: "/",
      element: <DefaultLayout />,
      children: [...moives],
    },
  ];
};

export default routes;
