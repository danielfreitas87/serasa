import React from 'react'
import { Component } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { RootState } from '@store'
import { LoginPageConnected } from '@pages'
import { PathAliasEnum } from '@enums'

function RenderAuthPage() {
  const { token } = useSelector((state: RootState) => state.login)
  const location = useLocation()

  if (!token && location.pathname === PathAliasEnum.LOGIN)
    return <LoginPageConnected />

  if (token) {
    return location.pathname === PathAliasEnum.LOGIN ? (
      <Navigate to={PathAliasEnum.HOME} replace />
    ) : (
      <Outlet />
    )
  }

  return <Navigate to={PathAliasEnum.LOGIN} replace />
}

export default class AuthPage extends Component {
  render() {
    return <RenderAuthPage />
  }
}
