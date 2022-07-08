import React, { Component } from 'react'
import { Layout } from 'antd'

const { Footer } = Layout

export class LayoutFooter extends Component {
  render() {
    return (
      <Footer {...this.props}>
        Serasa Experian ©2022 Created by Daniel Freitas
      </Footer>
    )
  }
}
