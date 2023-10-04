import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type iMes, type iAuth, type iIncoming } from '../models/models'

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
    }),
    sendMessage: builder.mutation< iMes, { idInstance: string, apiTokenInstance: string, bodyMes: iMes } >({
      query: (param) => {
        const { idInstance, apiTokenInstance, bodyMes } = param
        return {
          url: `waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
          method: 'POST',
          body: bodyMes
        }
      }
    }),
    getMessage: builder.query < iIncoming, { idInstance: string, apiTokenInstance: string } >({
      query: (param) => {
        const { idInstance, apiTokenInstance } = param
        return {
          url: `waInstance${idInstance}/receiveNotification/${apiTokenInstance}`
        }
      }
    }),
    deleteNotification: builder.mutation< { id: number }, { idInstance: string, apiTokenInstance: string, receiptId: number } >({
      query: (param) => {
        const { idInstance, apiTokenInstance, receiptId } = param
        return {
          url: `waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`,
          method: 'DELETE'
        }
      }
    })
  })
})

export const {
  useLazyGetAuthQuery,
  useSendMessageMutation,
  useGetMessageQuery,
  useDeleteNotificationMutation
} = greenApi
