import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3500/api",
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token || localStorage.getItem("token");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
                console.log("Authorization header set with token:", token);
            } else {
                console.log("No token found, proceeding without Authorization header");
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: "/users/login",
                method: "POST",
                body: data,
            })
        }),
        // end of login endpoint
        register: builder.mutation({
            query: (data) => ({
                url: "/users/register", // Match your backend: router.post("/register")
                method: "POST",
                body: data,
            })
        }),
        verifyOTP: builder.mutation({
            query: (data) => ({
                url: "/users/verify", // Match your backend: router.post("/verify")
                method: "POST",
                body: data, // Sending { email, otp }
            })
        }),
        resendOTP: builder.mutation({
            query: (data) => ({
                url: "/users/resend-otp",
                method: "POST",
                body: data, // Sending { email }
            })
        }),
        forgotPassword: builder.mutation({
            query: (data) => ({
                url: "/users/forgot-password",
                method: "POST",
                body: data, // Sending { email }
            })
        }),
        resetPassword: builder.mutation({
            query: (data) => ({
                url: "/users/reset-password",
                method: "POST",
                body: data, // Sending { email, newPassword, resetToken }
            })
        }),
        //end point for getting all users for admin dashboard
        getUsers: builder.query({
            query: () => ({
                url: "/users/all",
                method: "GET",
            })
        })// end of get users endpoint
        ,
        //delete user endpoint by id by admin
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/users/delete/${id}`,
                method: "DELETE",
            })
        }),// end of delete user endpoint
        //update user endpoint by id by admin
        updateUser: builder.mutation({
            query: (data) => ({
                url: `/users/edit-me`,
                method: "PUT",
                body: data,
            })
        }),
        deleteAccount: builder.mutation({
            query: () => ({
                url: `/users/delete-account`,
                method: "DELETE",
            })
        })
        ,//getting roles
        getRoles: builder.query({
            query: () => ({
                url: "/roles/all",
                method: "GET",
            })
        })
    })
})
export const {
    useLoginMutation,
    useGetUsersQuery,
    useDeleteUserMutation,
    useUpdateUserMutation,
    useGetRolesQuery,
    useVerifyOTPMutation,
    useResendOTPMutation,
    useRegisterMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,
    useDeleteAccountMutation,
} = api;