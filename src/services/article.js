import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidapiKey = import.meta.env.VITE_RAPIDAPI_KEY;
const rapidapiHost = import.meta.env.VITE_RAPIDAPI_HOST;

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", rapidapiKey);
      headers.set("x-rapidapi-host", rapidapiHost);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;
