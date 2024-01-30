import Main from "../layout/Main";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../pages/home/Home";
import Menu from "../pages/shop/Menu";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/menu",
          element: <Menu/>
        }
      ]
    },
  ]);
  export default router;