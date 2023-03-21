import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
   const details = useLoaderData();
   console.log(details);
   const { title, price, picture, description, features } = details;
   return (
      <div className="px-4 py-12 mx-auto max-w-screen-xl w-full">
         <div className="grid md:grid-cols-2 md:gap-14 gap-7">
            <div>
               <img src={picture} className="rounded" alt="" />
               <div className=" relative">
                  <h4 className="pt-2 text-xl inline-block border-b-2 font-semibold border-purple-500 ">
                     {title}
                  </h4>
                  <p className="py-1">{description}</p>

                  <p className="absolute font-semibold top-2 right-3">
                     ${price}
                  </p>

                  <button className="bg-purple-500 rounded px-4 mt-2 p-1.5 text-gray-100 hover:bg-purple-500 duration-500 w-full">
                     Buy Now
                  </button>
               </div>
            </div>
            <div>
               <h4 className="md:pt-0 pt-2 text-2xl inline-block border-b-2 font-semibold border-purple-500 ">
                  You will get these and some step...!!
               </h4>
               <div>
                  {features.map((feature) => (
                     <div className="pt-4">
                        <img src={feature.img} className="rounded" alt="" />
                        <h4 className="pt-2 text-xl font-semibold ">
                           {feature.title}
                        </h4>
                        <p className="pt-2">{feature.disc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default CourseDetails;
