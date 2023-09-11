import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type iAuth } from '../models/models'

export const greenApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.green-api.com/',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json')
      return headers
    }
  }),
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getAuth: builder.query < iAuth, { idInstance: string, apiTokenInstance: string } >({
      query: (param) => {
        const { idInstance, apiTokenInstance } = param
        return {
          url: `waInstance${idInstance}/getStateInstance/${apiTokenInstance}`
        }
      }
    })
  })
})

export const { useLazyGetAuthQuery } = greenApi
