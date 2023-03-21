import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import Loader from "../../utilities/Loader";

const Profile = () => {
   const { user } = useContext(AuthContext);
   const [loading, setLoading] = useState(false);
   const [userInfo, setUserInfo] = useState({});
   //    const { data: userInfo = [], isLoading } = useQuery({
   //       queryKey: ["user.email"],
   //       queryFn: async () => {
   //          const res = await fetch(`http://localhost:5000/users/${user?.email}`, {
   //             // headers: {
   //             //    authorization: `berarer ${localStorage.getItem("access-token")}`,
   //             // },
   //          });
   //          const data = await res.json();
   //          return data;
   //       },
   //    });
   //    console.log(userInfo);

   useEffect(() => {
      if (user.email) {
         setLoading(true);
         fetch(`http://localhost:5000/users/${user?.email}`).then((res) =>
            res.json().then((data) => {
               setUserInfo(data);
               setLoading(false);
            })
         );
      }
   }, [user]);

   if (loading) {
      return <Loader />;
   }

   return (
      <div className="px-4 py-12 mx-auto max-w-screen-xl w-full">
         <h2 className="font-semibold md:text-3xl text-xl border-b-2 mb-4 inline-block border-purple-500  text-gray-600">
            My profile
         </h2>
         <div className="mt-5">
            <img
               className="h-24 w-24 rounded-full border border-purple-500"
               src={userInfo.profilePicture}
               alt=""
            />
            <div className="flex items-center">
               <h3 className="text-xl font-semibold">{userInfo?.name}</h3>
               <p>({userInfo?.role})</p>
            </div>
            <p>{userInfo?.email}</p>
         </div>
         <div className="grid md:grid-cols-3 gap-6">
            <div>
               <div className="mt-3">
                  <h3 className="text-xl font-semibold border-b-2 mb-4 inline-block border-purple-500">
                     Personal Information
                  </h3>
                  <p> Age : {userInfo?.age}</p>
                  {userInfo?.vehicle && (
                     <p> Rider type : {userInfo.vehicle} </p>
                  )}
                  {userInfo?.role === "learner" && (
                     <p>Learning topic : {userInfo.vehicle}</p>
                  )}
                  <p> Phone : {userInfo?.phone}</p>
                  <p> Address : {userInfo?.address}</p>
               </div>

               {userInfo?.vehicleName && (
                  <div className="mt-3">
                     <h3 className="text-xl font-semibold border-b-2 mb-4 inline-block border-purple-500">
                        Vehicle Information
                     </h3>
                     {userInfo?.vehicleName && (
                        <p> Vehicle name : {userInfo.vehicleName} </p>
                     )}
                     {userInfo?.area && <p> Riding Area : {userInfo.area} </p>}
                     {userInfo?.vehicleModel && (
                        <p> Vehicle model : {userInfo.vehicleModel} </p>
                     )}
                     {userInfo?.vehiclePalate && (
                        <p> Vehicle paalate : {userInfo.vehiclePalate} </p>
                     )}
                  </div>
               )}
            </div>
            <div>
               <h3 className="text-xl font-semibold border-b-2 mb-4 inline-block border-purple-500">
                  NID Card
               </h3>
               <figure>
                  <img
                     className="w-full max-h-[250px] min-h-[250px] bg-cover rounded border border-purple-500 hover:scale-105 overflow-hidden duration-500"
                     src={userInfo.nidPicture}
                     alt=""
                  />
               </figure>
            </div>
            {userInfo?.licencePicture && (
               <div>
                  <h3 className="text-xl font-semibold border-b-2 mb-4 inline-block border-purple-500">
                     Driving licence
                  </h3>
                  <img
                     className="w-full max-h-[250px] min-h-[250px] bg-cover rounded border border-purple-500 hover:scale-105 overflow-hidden duration-500"
                     src={userInfo.licencePicture}
                     alt=""
                  />
               </div>
            )}
         </div>
      </div>
   );
};

export default Profile;
