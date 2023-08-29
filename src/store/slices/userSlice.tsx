import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  idInstance: null,
  apiTokenInstance: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser (state, action) {
      state.idInstance = action.payload.idInstance
      state.apiTokenInstance = action.payload.apiTokenInstance
    },
    removeUser (state) {
      state.idInstance = null
      state.apiTokenInstance = null
    }
  }
})

export const { setUser, removeUser } = userSlice.actions
export default userSlice.reducer

// export const selectIdInstance = (state) => state.user.idInstance
// export const selectApiTokenInstance = (state) => state.user.apiTokenInstance
