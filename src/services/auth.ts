import BaseResponse from "@/types/response";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

interface AuthResponse extends BaseResponse {
  data: UserAutjForm;
}

type UserAutjForm = {
  name: string;
  email: string;
  password: string;
};

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    register: builder.mutation<AuthResponse, UserAutjForm>({
      query: (body) => ({
        url: "/auth/sign-up",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation } = authApi;
