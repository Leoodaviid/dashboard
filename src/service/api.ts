import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetKpisResponse,
  GetProductResponse,
  GetTransactionsResponse,
} from "../models/models";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "Transactions"],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => "api/kpis/",
      providesTags: ["Kpis"],
    }),
    getProducts: build.query<Array<GetProductResponse>, void>({
      query: () => "api/products/",
      providesTags: ["Products"],
    }),
    getTransactions: build.query<Array<GetTransactionsResponse>, void>({
      query: () => "api/transactions/",
      providesTags: ["Transactions"],
    }),
  }),
});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } =
  api;
