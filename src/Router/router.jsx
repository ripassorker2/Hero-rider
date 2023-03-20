import { createBrowserRouter } from "react-router-dom";
import Main from "../Loyout/Main";
import GetStarted from "../pages/GetStarted/GetStarted";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      children: [{ path: "/", element: <GetStarted /> }],
   },
]);
