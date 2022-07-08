import React, { Component } from 'react'
import { Layout as AntLayout } from 'antd'
import { StyledLayoutHeader } from '../layout-header'
import { StyledLayoutContent } from '../layout-content'
import { StyledLayoutFooter } from '../layout-footer'

export class Layout extends Component {
  render() {
    return (
      <AntLayout {...this.props}>
        <StyledLayoutHeader />
        <StyledLayoutContent />
        <StyledLayoutFooter />
      </AntLayout>
    )
  }
}
