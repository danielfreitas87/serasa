import React, { Component } from 'react'
import { Alert, Form, Input } from 'antd'
import { StyledButton } from '@components'
import { loginRules } from '@validations'
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
    const { emailRules, passwordRules } = loginRules
    return (
      <Form layout='vertical' onFinish={this.submitForm}>
        <Item name='email' label='Seu e-mail' required rules={emailRules}>
          <Input />
        </Item>
        <Item name='password' label='Sua senha' required rules={passwordRules}>
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
