import React, { Component } from 'react'
import { Col, Row } from 'antd'
import { connect } from 'react-redux'
import { LoginForm, StyledSpinner, StyledTitle } from '@components'
import { doLogin } from '@actions'
import { IUserLogin } from '@interfaces'
import { RootState } from '@store'
import './style.less'

type LoginPageProps = {
  doLoginDispatched: (userLogin: IUserLogin) => void
  isLoading: boolean
  errorMessage: string
}

class LoginPage extends Component<LoginPageProps> {
  render() {
    const { doLoginDispatched, isLoading, errorMessage } = this.props

    return (
      <Row justify='center' align='middle' className='loginWrapper'>
        {isLoading && <StyledSpinner />}
        <Col span={6}>
          <StyledTitle label='Login' className='loginTitle' />
          <LoginForm errorMessage={errorMessage} onSubmit={doLoginDispatched} />
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = ({ login }: RootState) => ({
  isLoading: login.loading,
  errorMessage: login.error,
})

const mapDispatchToProps = {
  doLoginDispatched: doLogin,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
