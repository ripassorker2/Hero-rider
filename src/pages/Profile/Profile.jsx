import React from "react";

const Profile = () => {
   return (
      <div className="px-4 py-12 mx-auto max-w-screen-xl w-full">
         <h2 className="font-semibold md:text-3xl text-xl border-b-2 mb-4 inline-block border-purple-500  text-gray-600">
            My profile
         </h2>
         <div className="mt-5">
            <img
               className="h-24 w-24 rounded-full border border-purple-500"
               src="https://www.netsolutions.com/insights/wp-content/uploads/2020/12/the-10-best-rideshare-apps-of-2021.webp"
               alt=""
            />
            <div className="flex items-center">
               <h3 className="text-xl font-semibold">Ripas Sorker Rifat</h3>
               <p>(Rider)</p>
            </div>
            <p>ripassorkerrifat@gmail.com</p>
         </div>
         <div className="grid md:grid-cols-3 gap-6">
            <div>
               <div className="mt-3">
                  <h3 className="text-xl font-semibold border-b-2 mb-4 inline-block border-purple-500">
                     Personal Information
                  </h3>
                  <p> Age : 21</p>
                  <p> Phone : 01744876681</p>
                  <p> Riding Area : Banani Dhaha</p>
                  <p> Address : Dhaka Bangladesh</p>
               </div>
               <div className="mt-3">
                  <h3 className="text-xl font-semibold border-b-2 mb-4 inline-block border-purple-500">
                     Vehicle Information
                  </h3>
                  <p> Vehicle type : 21</p>
                  <p> Vehicle model: 01744876681</p>
                  <p> Vehicle paalate : Banani Dhaha</p>
               </div>
            </div>
            <div>
               <h3 className="text-xl font-semibold border-b-2 mb-4 inline-block border-purple-500">
                  NID Card
               </h3>
               <figure>
                  <img
                     className="w-full bg-cover rounded border border-purple-500 hover:scale-105 overflow-hidden duration-500"
                     src="https://www.tbsnews.net/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/images/2023/01/01/web-national-id-edited-26-11-2017-1532158137905.jpg"
                     alt=""
                  />
               </figure>
            </div>
            <div>
               <h3 className="text-xl font-semibold border-b-2 mb-4 inline-block border-purple-500">
                  Driving licence
               </h3>
               <img
                  className="w-full bg-cover rounded border border-purple-500 hover:scale-105 overflow-hidden duration-500"
                  src="https://media.istockphoto.com/id/1073597286/vector/driver-license-with-male-photo-identification-or-id-card-template-vector-illustration.jpg?s=170667a&w=is&k=20&c=ZGfrRxbVbSOjW5dV0XKrfYOYHIuOJwo4Du3R5NDxcFY="
                  alt=""
               />
            </div>
         </div>
      </div>
   );
};

export default Profile;
