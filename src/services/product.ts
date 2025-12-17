import BaseResponse from "@/types/response";
import { Product } from "@prisma/client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

interface ProductsResponse extends BaseResponse {
    data: Product[];
}

export const prodctApi = createApi({
  reducerPath: "produkApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/products",
  }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    gettAllProducts: builder.query<ProductsResponse, any>({
      query: () => ({
        url: "/",
      }),
    }),
  }),
});

export const { useGettAllProductsQuery } = prodctApi;
