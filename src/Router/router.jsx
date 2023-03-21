import { createBrowserRouter } from "react-router-dom";
import Main from "../Loyout/Main";
import GetStarted from "../pages/GetStarted/GetStarted";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import ResisterLearner from "../pages/ResisterLearner/ResisterLearner";
import ResisterRider from "../pages/ResisterRider/ResisterRider";
import PrivetRouter from "./PrivetRouter";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      children: [
         {
            path: "/",
            element: (
               <PrivetRouter>
                  <Profile />
               </PrivetRouter>
            ),
         },
         { path: "/login", element: <Login /> },
         { path: "/resister", element: <GetStarted /> },
         { path: "/resisterLearner", element: <ResisterLearner /> },
         { path: "/resisterRider", element: <ResisterRider /> },
      ],
   },
]);
