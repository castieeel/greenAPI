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
  const { data: stateInstance } = useGetAuthQuery(paramQuery)

  const onSubmit = (data: FormValues): void => {
    id = data.idInstance
    token = data.apiTokenInstance
    console.log(stateInstance)
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
