import React from 'react'
import * as S from '../styled-components/login.style'
import { useForm } from 'react-hook-form'
import { useGetAuthQuery } from '../services/api'

interface FormValues {
  idInstance: string
  apiTokenInstance: string
}

export const Login: React.FunctionComponent = () => {
  const { register, handleSubmit } = useForm<FormValues>()
  let id: string = ''
  let token: string = ''

  const paramQuery: FormValues = {
    idInstance: id,
    apiTokenInstance: token
  }

  const onSubmit = (formData: FormValues): void => {
    id = formData.idInstance
    token = formData.apiTokenInstance
    const { data } = useGetAuthQuery(paramQuery)

    if (data?.stateInstance === 'authorized') {
      console.log(data.stateInstance)
    }

    // getAuth({
    //   idInstance: id,
    //   apiTokenInstance: token
    // }).then((data: { stateInstance: string }) => {
    //   if (data.stateInstance === 'authorized') {
    //     localStorage.setItem('idInstance', id)
    //     localStorage.setItem('apiTokenInstance', token)
    //     console.log(data.stateInstance)
    //   }
    // })
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <S.FormLogin onSubmit={ handleSubmit(onSubmit) } noValidate>
    <S.Title>Введите данные для GREEN-API</S.Title>
    <S.Input {...register('idInstance', { required: true })} placeholder='idInstance' type='text'/>
    <S.Input {...register('apiTokenInstance', { required: true })}placeholder='apiTokenInstance' type='text'/>
    <S.Button type='submit'>Войти</S.Button>
    </S.FormLogin>
  )
}
