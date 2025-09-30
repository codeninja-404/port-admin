import { Navigate, useLocation } from 'react-router-dom'
import { useAppSelector } from '@/hooks/redux'

interface ProtectedRouteProps {
  children: React.ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, token } = useAppSelector((state) => state.auth)
  const location = useLocation()

  // Check if user is authenticated and has a valid token
  const isLoggedIn = isAuthenticated && token

  if (!isLoggedIn) {
    // Redirect to sign-in page with return url
    return <Navigate to='/sign-in' state={{ from: location }} replace />
  }

  return <>{children}</>
}
