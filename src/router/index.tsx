import { createBrowserRouter } from "react-router-dom";

// component
import Root from "@src/components/pages/Root";

/** 2023/03/10 - TODO: 라우터? - by 1-blue */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/login",
    element: <Root />,
  },
  {
    path: "/signup",
    element: <Root />,
  },
  {
    path: "/movie",
    element: <Root />,
  },
]);

export default router;
