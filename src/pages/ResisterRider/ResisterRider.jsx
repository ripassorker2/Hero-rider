import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { saveUserAndsetToken } from "../../utilities/saveUserAndToken";
import SmallLoader from "../../utilities/SmallLoader";

const ResisterRider = () => {
   const { createUser, updateUserProfile } = useContext(AuthContext);
   const [loading, setLoading] = useState(false);
   const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_Imgbb_key}`;
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
      const vehicleName = form.carName.value;
      const vehiclePalate = form.carPalate.value;
      const vehicleModel = form.carModel.value;
      const vehicle = form.vehicle.value;
      const password = form.password.value;
      const confirmPassword = form.confirmPassword.value;

      if (password !== confirmPassword) {
         return toast.error("Password doesn't match");
      }

      createUser(email, password)
         .then((result) => {
            setLoading(true);
            const formData = new FormData();
            formData.append("image", profilePicture);
            fetch(url, {
               method: "POST",
               body: formData,
            })
               .then((res) => res.json())
               .then((data) => {
                  const profileImage = data.data.display_url;
                  updateUserProfile(name, profileImage)
                     .then((data) => {
                        const formData = new FormData();
                        formData.append("image", licencePicture);
                        fetch(url, {
                           method: "POST",
                           body: formData,
                        })
                           .then((res) => res.json())
                           .then((data) => {
                              const licenceImage = data.data.display_url;

                              const formData = new FormData();
                              formData.append("image", nidPicture);
                              fetch(url, {
                                 method: "POST",
                                 body: formData,
                              })
                                 .then((res) => res.json())
                                 .then((data) => {
                                    const nidImage = data.data.display_url;
                                    const userInfo = {
                                       name,
                                       email,
                                       age,
                                       area,
                                       address,
                                       phone,
                                       role: "rider",
                                       vehicleModel,
                                       vehicleName,
                                       vehiclePalate,
                                       vehicle,
                                       licencePicture: licenceImage,
                                       nidPicture: nidImage,
                                       profilePicture: profileImage,
                                    };
                                    saveUserAndsetToken(userInfo);
                                 });
                           });
                        form.reset();
                        toast.success("Created rider user succesfully...!!");
                        setLoading(false);
                     })
                     .catch((err) => {
                        setLoading(false);
                        return toast.error(err.message);
                     });
               });
         })
         .catch((err) => {
            setLoading(false);
            return toast.error(err.message);
         });
   };

   return (
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
         <div className="container max-w-screen-lg mx-auto">
            <div>
               <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                  <h2 className="font-semibold md:text-3xl text-xl border-b-2 mb-4 inline-block border-purple-500 text-center text-gray-600">
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
                              <label htmlFor="licencePicture">
                                 Driving Licence Picture
                              </label>
                              <input
                                 type="file"
                                 name="licencePicture"
                                 className="h-10 block  border border-gray-500 focus:border-gray-900 focus:outline-none mt-1 rounded px-4 w-full bg-gray-50"
                                 placeholder="Driving licence picture...!!"
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
                           <div className="md:col-span-3">
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
                              <label htmlFor="area">Area</label>
                              <input
                                 type="state"
                                 name="area"
                                 className="h-10 block  border border-gray-500 focus:border-gray-900 focus:outline-none mt-1 rounded px-4 w-full bg-gray-50"
                                 placeholder="Enter your area...!!"
                                 required
                              />
                           </div>
                           <div className="md:col-span-2">
                              <label htmlFor="carName">Vehicle Name</label>
                              <input
                                 type="text"
                                 name="carName"
                                 className="h-10 block  border border-gray-500 focus:border-gray-900 focus:outline-none mt-1 rounded px-4 w-full bg-gray-50"
                                 placeholder="Enter your vehicle name...!!"
                                 required
                              />
                           </div>
                           <div className="md:col-span-2">
                              <label htmlFor="carPalate">Vehicle Palate</label>
                              <input
                                 type="text"
                                 name="carPalate"
                                 className="h-10 block  border border-gray-500 focus:border-gray-900 focus:outline-none mt-1 rounded px-4 w-full bg-gray-50"
                                 placeholder="Enter your vehicle palate...!!"
                                 required
                              />
                           </div>
                           <div className="md:col-span-3">
                              <label htmlFor="carPalate">Vehicle Model</label>
                              <input
                                 type="text"
                                 name="carModel"
                                 className="h-10 block  border border-gray-500 focus:border-gray-900 focus:outline-none mt-1 rounded px-4 w-full bg-gray-50"
                                 placeholder="Enter your vehicle model...!!"
                                 required
                              />
                           </div>
                           <div className="md:col-span-5">
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
                              {loading ? <SmallLoader /> : "Sign Up"}
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
