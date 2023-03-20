import apiSlice from "./apiSlice";

const userApi = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      saveUser: builder.mutation({
         query: (userInfo) => ({
            url: "user",
            method: "POST",
            body: userInfo,
         }),
         invalidatesTags: ["Users"],
      }),
      getAllUser: builder.query({
         query: () => ({
            url: `users`,
         }),
         providesTags: ["Users"],
      }),
   }),
});

export const { useSaveUserMutation } = userApi;
