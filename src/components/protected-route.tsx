import { Navigate, useLocation } from 'react-router-dom'
import { useAppSelector } from '@/hooks/redux'

interface ProtectedRouteProps {
  children: React.ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated } = useAppSelector((state) => state.auth)
  const location = useLocation()

  if (!isAuthenticated) {
    // Redirect to login page with return url
    return <Navigate to="/sign-in" state={{ from: location }} replace />
  }

  return <>{children}</>
}