import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { type RootState } from '../store/store'
import { setLogin } from '../store/slices/sliceUser'

export const ProtectedRoute: React.FunctionComponent = () => {
  const dispatch = useDispatch()

  if (localStorage.getItem('idInstance') != null && localStorage.getItem('apiTokenInstance') != null) {
    dispatch(setLogin(true))
  }
  const isLoggedIn = useSelector((state: RootState) => (state.userData.authorized))

  console.log(isLoggedIn)
  return (
    isLoggedIn ? <Outlet /> : <Navigate to={{ pathname: 'login' }} replace />
  )
}
