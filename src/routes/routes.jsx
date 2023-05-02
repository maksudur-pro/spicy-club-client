import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Home/Blog/Blog";
import Details from "../Layout/Details";
import ChefDetails from "../pages/ChefDetails/ChefDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "details",
    element: <Details></Details>,
    children: [
      {
        path: ":id",
        element: <ChefDetails></ChefDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chefs/${params.id}`),
      },
    ],
  },
]);

export default router;
