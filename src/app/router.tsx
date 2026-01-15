import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Schedule from "../pages/Schedule";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/schedule",
    element: <Schedule />,
  },
]);
