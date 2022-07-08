import React, { Component } from 'react'
import { Route, Routes as ReactRoutes } from 'react-router-dom'
import { StyledLayout } from '@components'
import { AuthPage, LoginPageConnected } from '@pages'
import { PathAliasEnum } from '@enums'

export class Router extends Component {
  render() {
    return (
      <ReactRoutes>
        <Route element={<AuthPage />}>
          <Route path={PathAliasEnum.HOME} element={<StyledLayout />} />
          <Route path={PathAliasEnum.LOGIN} element={<LoginPageConnected />} />,
        </Route>
      </ReactRoutes>
    )
  }
}
