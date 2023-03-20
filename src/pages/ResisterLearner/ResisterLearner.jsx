import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const ResisterLearner = () => {
   const { createUser, updateUserProfile, loading, setLoading } =
      useContext(AuthContext);

   const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.fullName.value;
      const email = form.email.value;
      const age = form.age.value;
      const phone = form.phone.value;
      const address = form.address.value;
      const nidPicture = form.nidPicture.files[0];
      const profilePicture = form.profilePicture.files[0];
      const vehicle = form.vehicle.value;
      const password = form.password.value;
      const confirmPassword = form.confirmPassword.value;

      if (password !== confirmPassword) {
         return toast.error("Password doesn't match");
      }

      const userInfo = {
         name,
         email,
         age,

         address,
         phone,
         vehicle,
         nidPicture,
         profilePicture,
         password,
         confirmPassword,
      };
      console.log(userInfo);
   };

   return (
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
         <div className="container max-w-screen-lg mx-auto">
            <div>
               <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                  <h2 className="font-semibold md:text-3xl text-xl border-b-2 mb-4 inline-block border-purple-500 text-center text-gray-600">
                     Resister as a Learner
                  </h2>
                  <form onSubmit={handleSubmit} className="">
                     <div className="lg:col-span-2">
                        <div className="grid gap-4 gap-y-2  grid-cols-1 md:grid-cols-5">
                           <div className="md:col-span-3">
                              <label htmlFor="fullName">Full Name</label>
                              <input
                                 type="text"
                                 name="fullName"
                                 className="h-10 border border-gray-500 focus:border-gray-900 focus:outline-none mt-1 rounded px-4 w-full bg-gray-50"
                                 placeholder="Full Name"
                                 required
                              />
                           </div>

                           <div className="md:col-span-2">
                              <label htmlFor="email">Email Address</label>
                              <input
                                 type="email"
                                 name="email"
                                 className="h-10 border border-gray-500 focus:border-gray-900 focus:outline-none mt-1 rounded px-4 w-full bg-gray-50"
                                 placeholder="example@domain.com"
                                 required
                              />
                           </div>

                           <div className="md:col-span-2">
                              <label htmlFor="age">Age</label>
                              <input
                                 type="number"
                                 name="age"
                                 className="h-10 border border-gray-500 focus:border-gray-900 focus:outline-none mt-1 rounded px-4 w-full bg-gray-50"
                                 placeholder="Enter your age...!!"
                                 required
                              />
                           </div>

                           <div className="md:col-span-3">
                              <label htmlFor="phone">Phone </label>
                              <input
                                 type="number"
                                 name="phone"
                                 className="h-10 border border-gray-500 focus:border-gray-900 focus:outline-none mt-1 rounded px-4 w-full bg-gray-50"
                                 placeholder="Enter your phone number...!!"
                                 required
                              />
                           </div>

                           <div className="md:col-span-3">
                              <label htmlFor="address">Address / Street</label>
                              <input
                                 type="text"
                                 name="address"
                                 className="h-10 border border-gray-500 focus:border-gray-900 focus:outline-none mt-1 rounded px-4 w-full bg-gray-50"
                                 placeholder="Enter your address...!!"
                                 required
                              />
                           </div>

                           <div className="md:col-span-2">
                              <label htmlFor="nidPicture">NID Picture</label>
                              <input
                                 type="file"
                                 name="nidPicture"
                                 className="h-10 block  border border-gray-500 focus:border-gray-900 focus:outline-none mt-1 rounded px-4 w-full bg-gray-50"
                                 placeholder="  NID picture...!!"
                                 required
                              />
                           </div>
                           <div className="md:col-span-2">
                              <label htmlFor="profilePicture">
                                 Profile Picture
                              </label>
                              <input
                                 type="file"
                                 name="profilePicture"
                                 className="h-10 block  border border-gray-500 focus:border-gray-900 focus:outline-none mt-1 rounded px-4 w-full bg-gray-50"
                                 placeholder=" Profile picture...!!"
                                 required
                              />
                           </div>

                           <div className="md:col-span-3">
                              <label htmlFor="vehicle">Vehicle Type</label>
                              <select
                                 name="vehicle"
                                 required
                                 className="select h-10 block  border border-gray-500 focus:border-gray-900 focus:outline-none mt-1 rounded px-4 w-full bg-gray-50"
                              >
                                 <option disabled selected>
                                    Select Your Vehicle
                                 </option>
                                 <option>Bike</option>
                                 <option>Car</option>
                              </select>
                           </div>
                           <div className="md:col-span-3">
                              <label htmlFor="password">Password</label>
                              <input
                                 type="password"
                                 name="password"
                                 className="h-10 block  border border-gray-500 focus:border-gray-900 focus:outline-none mt-1 rounded px-4 w-full bg-gray-50"
                                 placeholder="Enter your password..!!"
                                 required
                              />
                           </div>
                           <div className="md:col-span-2">
                              <label htmlFor="confirmPassword">
                                 Confirm Password
                              </label>
                              <input
                                 type="password"
                                 name="confirmPassword"
                                 className="h-10 block  border border-gray-500 focus:border-gray-900 focus:outline-none mt-1 rounded px-4 w-full bg-gray-50"
                                 placeholder="Enter your confirm password..!!"
                                 required
                              />
                           </div>
                        </div>
                        <div className="mt-3 flex justify-end">
                           <button
                              type="submit"
                              className="bg-purple-500 hover:bg-purple-600 rounded px-4 py-1.5  font-semibold text-gray-100 "
                           >
                              Submit
                           </button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ResisterLearner;
