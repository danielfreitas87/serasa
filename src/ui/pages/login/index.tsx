import React, { Component } from 'react'
import { Col, Row, Form, Input } from 'antd'
import { connect } from 'react-redux'
import { StyledButton, StyledTitle } from '@components'
import { doLogin } from '@actions'
import { IUserLogin } from '@interfaces'
import './style.less'

const { Item } = Form

type LoginPageProps = {
  doLoginDispatched: (userLogin: IUserLogin) => void
}

class LoginPage extends Component<LoginPageProps> {
  render() {
    const { doLoginDispatched } = this.props

    const submitForm = (userLogin: IUserLogin) => doLoginDispatched(userLogin)

    return (
      <Row justify='center' align='middle' className='loginWrapper'>
        <Col span={6}>
          <StyledTitle label='Login' className='loginTitle' color='primary' />
          <Form layout='vertical' onFinish={submitForm}>
            <Item
              name='email'
              label='Email'
              required
              rules={[
                {
                  required: true,
                  message: 'Favor digitar o email!',
                },
              ]}
            >
              <Input />
            </Item>
            <Item
              name='password'
              label='Senha'
              required
              rules={[
                {
                  required: true,
                  message: 'Favor digitar a senha!',
                },
              ]}
            >
              <Input type='password' />
            </Item>
            <Item>
              <StyledButton label='ACESSAR' color='secondary' />
            </Item>
          </Form>
        </Col>
      </Row>
    )
  }
}

const mapDispatchToProps = {
  doLoginDispatched: doLogin,
}

export default connect(null, mapDispatchToProps)(LoginPage)
