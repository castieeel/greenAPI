import React from 'react'
import * as S from '../styled-components/login.style'
import { useForm } from 'react-hook-form'
import { greenApi } from '../services/api'

interface FormValues {
  idInstance: string
  apiTokenInstance: string
}

export const Login: React.FunctionComponent = () => {
  const { register, handleSubmit } = useForm<FormValues>()
  const [fetchAuth, { data: result }] = greenApi.endpoints.getAuth.useLazyQuery()

  const onSubmit = (formData: FormValues): void => {
    void fetchAuth(formData).unwrap().then((result) => {
      if (result?.stateInstance === 'authorized') {
        localStorage.setItem('idInstance', formData.idInstance)
        localStorage.setItem('apiTokenInstance', formData.apiTokenInstance)
      }
    })
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <S.FormLogin onSubmit={ handleSubmit(onSubmit) } noValidate>
    <S.Title>Введите данные для GREEN-API</S.Title>
    <S.Input {...register('idInstance', { required: true })} placeholder='idInstance' type='text'/>
    <S.Input {...register('apiTokenInstance', { required: true })}placeholder='apiTokenInstance' type='text'/>
    <S.Button type='submit'>Войти</S.Button>
    <p>{ result?.stateInstance }</p>
    </S.FormLogin>
  )
}
