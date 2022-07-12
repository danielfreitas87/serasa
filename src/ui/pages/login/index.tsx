import React, { Component } from 'react'
import { Col, Row, Card } from 'antd'
import { connect } from 'react-redux'
import {
  LoginForm,
  StyledLayoutHeader,
  StyledSpinner,
  StyledTitle,
} from '@components'
import { doLogin } from '@actions'
import { IUserLogin, IColSpan } from '@interfaces'
import { RootState } from '@store'
import './style.less'

const responsiveCol: IColSpan = {
  xs: { span: 20 },
  sm: { span: 14 },
  md: { span: 10 },
  lg: { span: 8 },
  xl: { span: 6 },
}

type Props = {
  doLoginDispatched: (userLogin: IUserLogin) => void
  isLoading: boolean
  errorMessage: string
}

class LoginPage extends Component<Props> {
  render() {
    const { doLoginDispatched, isLoading, errorMessage } = this.props

    return (
      <Col className='login'>
        <StyledLayoutHeader />
        <Row justify='center' align='middle' className='loginWrapper'>
          {isLoading && <StyledSpinner />}
          <Col {...responsiveCol}>
            <Card>
              <StyledTitle label='Login' className='loginTitle' />
              <LoginForm
                errorMessage={errorMessage}
                onSubmit={doLoginDispatched}
              />
            </Card>
          </Col>
        </Row>
      </Col>
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
