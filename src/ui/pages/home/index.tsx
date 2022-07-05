import React, { Component } from 'react'
import { Col, Typography } from 'antd'
import { StyledTitle } from '@components'

const { Title } = Typography

export default class HomePage extends Component {
  render() {
    return (
      <Col>
        <StyledTitle label='Home' />
      </Col>
    )
  }
}
