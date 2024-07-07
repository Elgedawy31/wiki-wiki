import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from "../../Api/Api";

const baseQueryWithAuth = fetchBaseQuery({
  baseUrl: `${baseURL}/`,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const TransactionApi = createApi({
  reducerPath: 'transactionApi',
  baseQuery: baseQueryWithAuth,
  endpoints: (builder) => ({
    getProductsByName: builder.query({
      query: (name) => `Admin-transaction-history`,
    }),
    getOneTransaction: builder.query({
      query: ({ id }) => `Admin-transaction-history/${id}`,
    }),
  }),
});

// Export hooks
export const { useGetProductsByNameQuery, useGetOneTransactionQuery, useGetUsersQuery,
  useGetUsersWarningQuery} = TransactionApi;
