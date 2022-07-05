import React, { Component } from 'react'
import { Col, Typography } from 'antd'
import { UserForm } from '@components'

const { Title } = Typography

const plantations = [
  'soja',
  'milho',
  'algodão',
  'café',
  'cana de açúcar',
]

export default class UserRegisterPage extends Component {
  render() {
    return (
      <Col>
        <Title level={1}>
          Cadastre-se
        </Title>
        <UserForm
          plantations={plantations}
        />
      </Col>
    )
  }
}
