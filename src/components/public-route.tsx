// src/components/public-route.tsx
import { Navigate, useLocation } from 'react-router-dom'
import { useAppSelector } from '@/hooks/redux'

interface PublicRouteProps {
  children: React.ReactNode
}

export function PublicRoute({ children }: PublicRouteProps) {
  const { isAuthenticated, token } = useAppSelector((state) => state.auth)
  const location = useLocation()

  const isLoggedIn = isAuthenticated && token

  // If user is already authenticated, redirect to dashboard or intended page
  if (isLoggedIn) {
    const from = location.state?.from?.pathname || '/dashboard'
    return <Navigate to={from} replace />
  }

  return <>{children}</>
}
