import { useEffect, useState } from "react";
const useRole = (email) => {
   const [isRole, setIsRole] = useState(false);

   useEffect(() => {
      if (email) {
         fetch(`http://localhost:5000/role/${email}`)
            .then((res) => res.json())
            .then((data) => {
               setIsRole(data);
            });
      }
   }, [email]);
   return [isRole];
};
export default useRole;
