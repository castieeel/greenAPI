import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

interface iMessage {
  text: string
  type: string
}

interface MessagesState {
  list: iMessage[]
}

const initialState: MessagesState = {
  list: []
}

export const listMessage = createSlice({
  name: 'listMessage',
  initialState,
  reducers: {
    getSendMessage: (state, action: PayloadAction<string>) => {
      state.list.push({ text: action.payload, type: 'sendMessage' })
    },
    getIncomingMessage: (state, action: PayloadAction<string>) => {
      state.list.push({ text: action.payload, type: 'incomingMessage' })
    }
  }
})

export const { getSendMessage, getIncomingMessage } = listMessage.actions
export default listMessage.reducer
