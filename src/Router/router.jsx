import { createBrowserRouter } from "react-router-dom";
import Main from "../Loyout/Main";
import GetStarted from "../pages/GetStarted/GetStarted";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ResisterLearner from "../pages/ResisterLearner/ResisterLearner";
import ResisterRider from "../pages/ResisterRider/ResisterRider";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      children: [
         { path: "/", element: <Home /> },
         { path: "/login", element: <Login /> },
         { path: "/resister", element: <GetStarted /> },
         { path: "/resisterLearner", element: <ResisterLearner /> },
         { path: "/resisterRider", element: <ResisterRider /> },
      ],
   },
]);
