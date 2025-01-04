import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/home/Home";
import Main from "./component/main/Main";
import Project from "./component/Project";
import ProjectDetails from "./component/projectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        children:[
          {
            path:'/',
            element:<Project/>,
          }
        ]
      },
      {
        path:'/project/:id',
            element:<ProjectDetails/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
