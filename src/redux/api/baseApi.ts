import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://fe-task-api.mainstack.io'

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ['User', 'Wallet', 'Transactions'],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => '/user',
      providesTags: ['User'],
    }),
    getWallet: builder.query({
      query: () => '/wallet',
      providesTags: ['Wallet'],
    }),
    getTransactions: builder.query({
      query: () => '/transactions',
      providesTags: ['Transactions'],
    }),
  }),
})

export const {
  useGetUserQuery,
  useGetWalletQuery,
  useGetTransactionsQuery,
} = baseApi