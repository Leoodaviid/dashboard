import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse } from "../models/models";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["Kpis"],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => "api/kpis/",
      providesTags: ["Kpis"],
    }),
  }),
});

export const { useGetKpisQuery } = api;
