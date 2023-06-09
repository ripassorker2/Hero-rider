import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import Loader from "../utilities/Loader";

const PrivetRouter = ({ children }) => {
   const { user, loading } = useContext(AuthContext);

   const location = useLocation();

   if (loading) {
      return <Loader />;
   }
   if (!user) {
      return (
         <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
      );
   }

   return children;
};

export default PrivetRouter;
