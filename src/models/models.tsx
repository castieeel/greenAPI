export interface iChats {
  id: string
  name: string
  type: string
}

export interface iAuth {
  stateInstance: string
}

export interface iMes {
  chatId: string
  message: string
}

export interface AuthValues {
  idInstance: string
  apiTokenInstance: string
}

export interface iMessageValues {
  idInstance: string
  apiTokenInstance: string
  bodyMes: iMes
}

export interface iDelete {
  idInstance: string
  apiTokenInstance: string
  receiptId: number
}

export interface iLS {
  idInstance: string
  apiTokenInstance: string
}

export interface iIncoming {
  receiptId: number
  body: Body
}

export interface Body {
  typeWebhook: string
  instanceData: InstanceData
  timestamp: number
  idMessage: string
  senderData: SenderData
  messageData: MessageData
}

export interface MessageData {
  typeMessage: string
  textMessageData: TextMessageData
}

export interface TextMessageData {
  textMessage: string
}

export interface SenderData {
  chatId: string
  chatName: string
  sender: string
  senderName: string
}

export interface InstanceData {
  idInstance: number
  wid: string
  typeInstance: string
}
