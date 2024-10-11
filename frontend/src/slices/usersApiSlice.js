/* eslint-disable no-undef */
import { apiSlice } from "./apiSlice";

const BASE_URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5000';

const USERS_URL = `${BASE_URL}/api/users`;


export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // mutation means doing changes in database
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
    }),
}),

    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),

    updateUser: builder.mutation({
        query: (data) => ({
          url: `${USERS_URL}/profile`,
          method: "PUT",
          body: data,
        }),
      }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useUpdateUserMutation } = usersApiSlice;
