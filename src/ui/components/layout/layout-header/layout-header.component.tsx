import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd'
import { connect } from 'react-redux'
import { doLogout } from '@actions'
import { StyledButton, StyledIcon, StyledImage } from '@components'
import { LogoutOutlined } from '@ant-design/icons'
import { MainHeaderLogo } from '@assets'
import { RootState } from '@store'

const { Header } = Layout

const loginIconVisibility = {
  xs: { span: 24 },
  md: { span: 0 },
}

const loginButtonVisibility = {
  xs: { span: 0 },
  md: { span: 24 },
}

type Props = {
  token: string
  doLogoutDispatched: () => void
}

class LayoutHeader extends Component<Props> {
  render() {
    const { token, doLogoutDispatched, ...rest } = this.props
    return (
      <Header {...rest}>
        <Row justify='space-between' align='middle'>
          <StyledImage src={MainHeaderLogo} />
          {token && (
            <Row justify='center' align='middle'>
              <Col {...loginIconVisibility}>
                <StyledIcon
                  component={LogoutOutlined}
                  onClick={doLogoutDispatched}
                />
              </Col>
              <Col {...loginButtonVisibility}>
                <StyledButton label='Sair' onClick={doLogoutDispatched} />
              </Col>
            </Row>
          )}
        </Row>
      </Header>
    )
  }
}

const mapStateToProps = ({ login }: RootState) => ({
  token: login.token,
})

const mapDispatchToProps = {
  doLogoutDispatched: doLogout,
}

export const LayoutHeaderConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LayoutHeader)
