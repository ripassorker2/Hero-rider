export const saveUserAndsetToken = (userInfo) => {
   fetch(`http://localhost:5000/user/${userInfo.email}`, {
      method: "PUT",
      headers: {
         "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
   })
      .then((res) => res.json())
      .then((data) => {
         localStorage.setItem("access-token", data?.token);
      })
      .catch((err) => {
         console.error(err);
      });
};
