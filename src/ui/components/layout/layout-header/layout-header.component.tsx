import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd'
import { MainHeaderLogo } from '@assets'
import { StyledButton, StyledIcon, StyledImage } from '@components'
import { LoginOutlined } from '@ant-design/icons'

const { Header } = Layout

const loginIconVisibility = {
  xs: { span: 24 },
  md: { span: 0 },
}

const loginButtonVisibility = {
  xs: { span: 0 },
  md: { span: 24 },
}

export class LayoutHeader extends Component {
  render() {
    return (
      <Header {...this.props}>
        <Row justify='space-between' align='middle'>
          <StyledImage src={MainHeaderLogo} />
          <Row justify='center' align='middle'>
            <Col {...loginIconVisibility}>
              <StyledIcon component={LoginOutlined} />
            </Col>
            <Col {...loginButtonVisibility}>
              <StyledButton label='Entrar' />
            </Col>
          </Row>
        </Row>
      </Header>
    )
  }
}
