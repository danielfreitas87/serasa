import React, { Component } from 'react'
import { Typography } from 'antd'
import { ITitle } from '@interfaces'

const AntTitle = Typography.Title

export class Title extends Component<ITitle> {
  render() {
    const { label } = this.props
    return <AntTitle {...this.props}>{label}</AntTitle>
  }
}
