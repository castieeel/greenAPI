import React, { useState, useEffect } from 'react'
import { useDeleteNotificationMutation, useGetMessageQuery, useSendMessageMutation } from '../services/api'
import { type iMes, type iMessageValues, type iLS, type iDelete } from '../models/models'
import { useSelector, useDispatch } from 'react-redux'
import { type RootState } from '../store/store'
import { getIncomingMessage, getSendMessage } from '../store/slices/sliceMessage'
import * as S from '../styled-components/main.style'
import user from '../assets/img/user.png'
import sendImg from '../assets/img/send.png'
import { setLogin } from '../store/slices/sliceUser'

export const Main: React.FunctionComponent = () => {
  const dispatch = useDispatch()
  const messages = useSelector((state: RootState) => (state.listMessage.list))
  const [sendMessage] = useSendMessageMutation()
  const [deleteNotification] = useDeleteNotificationMutation()
  const [newMessage, setNewMessage] = useState('')
  const [newChat, setNewChat] = useState('')
  const [isShown, setIsShown] = useState(false)
  const [isShownNum, setIsShownNum] = useState(true)
  let LSid: string = ''
  let LSToken: string = ''

  if (localStorage.getItem('idInstance') != null && localStorage.getItem('apiTokenInstance') != null) {
    LSid = localStorage.getItem('idInstance') as string
    LSToken = localStorage.getItem('apiTokenInstance') as string
  } else {
    dispatch(setLogin(false))
  }

  const paramGetMes: iLS = {
    idInstance: LSid,
    apiTokenInstance: LSToken
  }

  const { data: receipt } = useGetMessageQuery(paramGetMes, {
    pollingInterval: 5000
  })

  const paramDel: iDelete = {
    idInstance: LSid,
    apiTokenInstance: LSToken,
    receiptId: 0
  }
  const bodyNewMes: iMes = {
    chatId: newChat + '@c.us',
    message: newMessage
  }

  const paramMes: iMessageValues = {
    idInstance: LSid,
    apiTokenInstance: LSToken,
    bodyMes: bodyNewMes
  }

  async function handleSendMessage (data: iMessageValues): Promise<void> {
    if (newMessage.length > 0) {
      await sendMessage(data).unwrap().then(() => {
        dispatch(getSendMessage(newMessage))
        setNewMessage('')
      })
    }
  }

  // новый чат
  const handleGetMessage = (data: string): void => {
    console.log('можно начать общение')
  }

  useEffect(() => {
    checkForNotification(paramDel)
  }, [receipt, bodyNewMes.chatId])

  const checkForNotification = (data: iDelete): void => {
    if (receipt?.body.senderData.chatId === bodyNewMes.chatId && receipt.receiptId != null && receipt?.body.messageData.typeMessage === 'textMessage') {
      paramDel.receiptId = receipt?.receiptId
      dispatch(getIncomingMessage(receipt?.body.messageData.textMessageData.textMessage))
      void deleteNotification(data).unwrap()
    } else if (receipt?.body.senderData.chatId === bodyNewMes.chatId && receipt.receiptId != null && receipt?.body.messageData.typeMessage !== 'textMessage') {
      paramDel.receiptId = receipt?.receiptId
      void deleteNotification(data).unwrap()
    }
  }

  return (
    <S.Container>
      { isShownNum &&
      <S.NumberBlock>
      <S.InputNum placeholder='Введите номер абонента'
      type='text'
      value = { newChat }
      onChange={(e) => { setNewChat(e.target.value) }}
      onKeyUp= {(e) => { if (e.key === 'Enter') { handleGetMessage(newChat + '@c.us'); setIsShown(true); setIsShownNum(false) } }}/>
      <S.ButtonNum onClick={(e) => { handleGetMessage(newChat + '@c.us'); setIsShown(true); setIsShownNum(false) }}>Начать общение</S.ButtonNum>
      </S.NumberBlock> }

{ isShown &&
<S.ChatBlock>
  <S.UserPanel>
   <S.UserImg src={user}/>
   <S.UserNum>{ newChat }</S.UserNum>
  </S.UserPanel>
<S.ChatForm>
        {messages?.map((message, index) => (
          message.type === 'sendMessage'
            ? (<S.Right key={index}><S.Sent>{message.text}</S.Sent></S.Right>)
            : (<S.Left key={index}><S.Incoming>{message.text}</S.Incoming></S.Left>)
        ))}
</S.ChatForm>

<S.InputBlock>
<S.Input placeholder='Введите сообщение'
        type='text'
        value = { newMessage}
        onChange={(e) => { setNewMessage(e.target.value) }}
        onKeyUp= {(e) => { if (e.key === 'Enter') { void handleSendMessage(paramMes) } }}/>
        <S.SendMessage onClick = {(e) => { void handleSendMessage(paramMes) } }>
          <S.SendImg src={sendImg}/>
        </S.SendMessage>
</S.InputBlock>
  </S.ChatBlock> }
    </S.Container>
  )
}
