import React, { Component } from 'react'
import { Alert, Form, Input } from 'antd'
import { StyledButton } from '@components'
import { loginErrorMessage } from '@errors'
import { IUserLogin } from '@interfaces'

const { Item } = Form

type Props = {
  errorMessage: string
  onSubmit: (userLogin: IUserLogin) => void
}

export class LoginForm extends Component<Props> {
  submitForm = (userLogin: IUserLogin) => this.props.onSubmit(userLogin)

  render() {
    const { errorMessage } = this.props
    return (
      <Form layout='vertical' onFinish={this.submitForm}>
        <Item
          name='email'
          label='Email'
          required
          rules={loginErrorMessage.email}
        >
          <Input />
        </Item>
        <Item
          name='password'
          label='Senha'
          required
          rules={loginErrorMessage.password}
        >
          <Input type='password' />
        </Item>

        {errorMessage && (
          <Item>
            <Alert message={errorMessage} type='error' />
          </Item>
        )}

        <Item>
          <StyledButton label='ACESSAR' />
        </Item>
      </Form>
    )
  }
}
