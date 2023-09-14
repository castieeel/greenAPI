import { configureStore } from '@reduxjs/toolkit'
import { greenApi } from '../services/api'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
  reducer: {
    [greenApi.reducerPath]: greenApi.reducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([greenApi.middleware])
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
