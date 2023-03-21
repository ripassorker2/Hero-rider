import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../utilities/Loader";

const Courses = () => {
   const [loading, setLoading] = useState(false);
   const [courses, setCourses] = useState([]);

   useEffect(() => {
      setLoading(true);
      fetch(`http://localhost:5000/courses`).then((res) =>
         res.json().then((data) => {
            setCourses(data);
            setLoading(false);
         })
      );
   }, []);
   console.log(courses);
   if (loading) {
      return <Loader />;
   }

   return (
      <div className="px-4 py-12 mx-auto max-w-screen-xl w-full">
         <h2 className="font-semibold md:text-3xl text-xl border-b-2 mb-4 inline-block border-purple-500  text-gray-600">
            Courses
         </h2>
         <div className="grid md:grid-cols-3 sm:gap-14 gap-7">
            {courses?.map((course) => (
               <div className="rounded shadow-md p-4 hover:scale-105 duration-500">
                  <figure>
                     <img
                        className="rounded-md max-h-[200px] w-full bg-cover min-h-[200px] "
                        src={course.picture}
                        alt=""
                     />
                  </figure>
                  <div className=" relative">
                     <h4 className="pt-2 text-xl inline-block border-b-2 font-semibold border-purple-500 ">
                        {course.title}
                     </h4>
                     <p className="py-1">
                        {course.description.length >= 170
                           ? course.description.slice(0, 170)
                           : course.description}
                     </p>
                     <p className="absolute font-semibold top-2 right-3">
                        ${course.price}
                     </p>
                     <Link to={`/course/${course._id}`}>
                        <button className="bg-purple-500 rounded px-4 mt-2 p-1.5 text-gray-100 hover:bg-purple-500 duration-500 w-full">
                           Details
                        </button>
                     </Link>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Courses;
