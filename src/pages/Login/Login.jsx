import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { saveUserAndsetToken } from "../../utilities/saveUserAndToken";
import SmallLoader from "../../utilities/SmallLoader";

const Login = () => {
   const { signin } = useContext(AuthContext);
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";

   const handleLogin = (event) => {
      event.preventDefault();
      setLoading(true);
      const email = event.target.email.value;
      const password = event.target.password.value;
      signin(email, password)
         .then((result) => {
            setLoading(true);
            console.log(result.user);
            const userInfo = { email };
            saveUserAndsetToken(userInfo);
            toast.success("User login succesfully...!!");
            event.target.reset();
            setLoading(false);
            navigate(from, { replace: true });
         })
         .catch((err) => {
            setLoading(false);
            return toast.error(err.message);
         });
   };

   return (
      <div className=" bg-gray-100 py-6 flex flex-col justify-center sm:py-14">
         <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 py-7 bg-white shadow-lg sm:rounded-3xl sm:p-10">
               <div className="max-w-md mx-auto">
                  <div>
                     <h1 className="text-2xl font-semibold">
                        Login in Hero Rider
                     </h1>
                  </div>
                  <form
                     onSubmit={handleLogin}
                     className="divide-y divide-gray-200"
                  >
                     <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <div className="relative">
                           <input
                              id="email"
                              name="email"
                              type="text"
                              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                              placeholder="Email address"
                           />
                           <label
                              htmlFor="email"
                              className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                           >
                              Email Address
                           </label>
                        </div>
                        <div className="relative">
                           <input
                              id="password"
                              name="password"
                              type="password"
                              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                              placeholder="Password"
                           />
                           <label
                              htmlFor="password"
                              className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                           >
                              Password
                           </label>
                        </div>
                        <div className="relative">
                           <button
                              type="submit"
                              className="bg-purple-500 text-white rounded-md px-4 py-1.5 w-full"
                           >
                              {loading ? <SmallLoader /> : "Login"}
                           </button>
                        </div>
                        <p className="max-w-xs text-base">
                           If you don't have account!! Please
                           <Link
                              to={"/resister"}
                              className="text-purple-600 underline"
                           >
                              {" "}
                              Sign up
                           </Link>
                        </p>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
