import React from 'react'
import * as S from '../styled-components/login.style'
import { useForm } from 'react-hook-form'
import { greenApi } from '../services/api'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { setLogin } from '../store/slices/sliceUser'
import { type AuthValues } from '../models/models'

export const Login: React.FunctionComponent = () => {
  const { register, handleSubmit } = useForm<AuthValues>()
  const [fetchAuth, { data: result }] = greenApi.endpoints.getAuth.useLazyQuery()
  const navigate: ReturnType<typeof useNavigate> = useNavigate()
  const dispatch = useDispatch()

  const onSubmit = (formData: AuthValues): void => {
    void fetchAuth(formData).unwrap().then((result) => {
      if (result?.stateInstance === 'authorized') {
        localStorage.setItem('idInstance', formData.idInstance)
        localStorage.setItem('apiTokenInstance', formData.apiTokenInstance)
        dispatch(setLogin(true))
        navigate('/')
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
