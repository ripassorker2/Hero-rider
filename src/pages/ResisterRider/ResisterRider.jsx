import React from "react";

const ResisterRider = () => {
   const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.fullName.value;
      const email = form.email.value;
      const age = form.age.value;
      const phone = form.phone.value;
      const address = form.address.value;
      const licencePicture = form.licencePicture.files[0];
      const nidPicture = form.nidPicture.files[0];
      const profilePicture = form.profilePicture.files[0];
      const area = form.area.value;
      const carName = form.carName.value;
      const carPalate = form.carPalate.value;
      const carModel = form.carModel.value;
      const vehicle = form.vehicle.value;
      const password = form.password.value;
      const confirmPassword = form.confirmPassword.value;

      const userInfo = {
         name,
         email,
         age,
         area,
         address,
         phone,
         carName,
         carPalate,
         carModel,
         vehicle,
         licencePicture,
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
                  <h2 className="font-semibold text-3xl text-center text-gray-600">
                     Resister as a Rider
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
                              />
                           </div>

                           <div className="md:col-span-3">
                              <label htmlFor="address">Address / Street</label>
                              <input
                                 type="text"
                                 name="address"
                                 className="h-10 border border-gray-500 focus:border-gray-900 focus:outline-none mt-1 rounded px-4 w-full bg-gray-50"
                                 placeholder="Enter your address...!!"
                              />
                           </div>

                           <div className="md:col-span-2">
                              <label htmlFor="licencePicture">
                                 Driving Licence Picture
                              </label>
                              <input
                                 type="file"
                                 name="licencePicture"
                                 className="h-10 block  border border-gray-500 focus:border-gray-900 focus:outline-none mt-1 rounded px-4 w-full bg-gray-50"
                                 placeholder="Driving licence picture...!!"
                              />
                           </div>
                           <div className="md:col-span-2">
                              <label htmlFor="nidPicture">NID Picture</label>
                              <input
                                 type="file"
                                 name="nidPicture"
                                 className="h-10 block  border border-gray-500 focus:border-gray-900 focus:outline-none mt-1 rounded px-4 w-full bg-gray-50"
                                 placeholder="  NID picture...!!"
                              />
                           </div>
                           <div className="md:col-span-3">
                              <label htmlFor="profilePicture">
                                 Profile Picture
                              </label>
                              <input
                                 type="file"
                                 name="profilePicture"
                                 className="h-10 block  border border-gray-500 focus:border-gray-900 focus:outline-none mt-1 rounded px-4 w-full bg-gray-50"
                                 placeholder=" Profile picture...!!"
                              />
                           </div>
                           <div className="md:col-span-3">
                              <label htmlFor="area">Area</label>
                              <input
                                 type="state"
                                 name="area"
                                 className="h-10 block  border border-gray-500 focus:border-gray-900 focus:outline-none mt-1 rounded px-4 w-full bg-gray-50"
                                 placeholder="Enter your area...!!"
                              />
                           </div>
                           <div className="md:col-span-2">
                              <label htmlFor="carName">Car Name</label>
                              <input
                                 type="text"
                                 name="carName"
                                 className="h-10 block  border border-gray-500 focus:border-gray-900 focus:outline-none mt-1 rounded px-4 w-full bg-gray-50"
                                 placeholder="Enter your car name...!!"
                              />
                           </div>
                           <div className="md:col-span-2">
                              <label htmlFor="carPalate">Car Palate</label>
                              <input
                                 type="text"
                                 name="carPalate"
                                 className="h-10 block  border border-gray-500 focus:border-gray-900 focus:outline-none mt-1 rounded px-4 w-full bg-gray-50"
                                 placeholder="Enter your car palate...!!"
                              />
                           </div>
                           <div className="md:col-span-3">
                              <label htmlFor="carPalate">Car Model</label>
                              <input
                                 type="text"
                                 name="carModel"
                                 className="h-10 block  border border-gray-500 focus:border-gray-900 focus:outline-none mt-1 rounded px-4 w-full bg-gray-50"
                                 placeholder="Enter your car model...!!"
                              />
                           </div>
                           <div className="md:col-span-5">
                              <label htmlFor="vehicle">Vehicle Type</label>
                              <select
                                 name="vehicle"
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

export default ResisterRider;
