import React from 'react'
import { AppRoutes } from './routes'
import { GlobalStyle } from './styled-components/app.style'

export const App: React.FunctionComponent = () => {
  return (
    <div>
    <GlobalStyle/>
    <AppRoutes/>
    </div>
  )
}
