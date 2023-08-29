import { Navigate } from 'react-router-dom'

export const ProtectedRoute: React.FunctionComponent = () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <Navigate to={'/login'} replace={true} />
}
