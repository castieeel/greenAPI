import { configureStore } from '@reduxjs/toolkit'
import { greenApi } from '../services/api'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import listReducer from './slices/sliceMessage'
import userReducer from './slices/sliceUser'

export const store = configureStore({
  reducer: {
    [greenApi.reducerPath]: greenApi.reducer,
    listMessage: listReducer,
    userData: userReducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([greenApi.middleware])
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
