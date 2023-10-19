import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/main'
import { NotFound } from './pages/not-found'
import { LoginPage } from './pages/login'
import { ProtectedRoute } from './components/ProtectedRoute'

export const AppRoutes: React.FunctionComponent = () => {
  return (
<Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />

      <Route element={<ProtectedRoute />}>
      <Route path="/" element={<MainPage />} />
      </Route>
</Routes>
  )
}
