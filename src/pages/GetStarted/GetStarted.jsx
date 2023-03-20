import React from "react";
import { Link } from "react-router-dom";

const GetStarted = () => {
   return (
      <div className="mx-auto max-w-screen-xl w-full my-14">
         <div className="grid md:grid-cols-2 gap-10">
            <Link
               to={"/resisterRider"}
               className="group relative shadow-lg rounded-lg cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
            >
               <div className="h-96 full">
                  <img
                     className="h-full w-full  duration-500 group-hover:rotate-3 group-hover:scale-125"
                     src="https://www.netsolutions.com/insights/wp-content/uploads/2020/12/the-10-best-rideshare-apps-of-2021.webp"
                     alt=""
                  />
               </div>
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
               <div className="absolute inset-0 flex translate-y-[65%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h3 className="font-dmserif text-4xl font-bold text-white">
                     Get started as a Rider
                  </h3>
               </div>
            </Link>
            <Link
               to={"/resisterLearner"}
               className="group relative shadow-lg rounded-lg cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
            >
               <div className="h-96 full">
                  <img
                     className="h-full w-full  duration-500 group-hover:rotate-3 group-hover:scale-125"
                     src="https://st.depositphotos.com/46454986/51468/v/600/depositphotos_514689668-stock-illustration-male-teacher-instructor-gives-female.jpg"
                     alt=""
                  />
               </div>
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
               <div className="absolute inset-0 flex translate-y-[65%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h3 className="font-dmserif text-4xl font-bold text-white">
                     Get started as a Learner
                  </h3>
               </div>
            </Link>
         </div>
      </div>
   );
};

export default GetStarted;
