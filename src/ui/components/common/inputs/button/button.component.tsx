import React, { Component } from 'react'
import { Button as AntButton } from 'antd'
import { IButton } from '@interfaces'

export class Button extends Component<IButton> {
  render() {
    const { label } = this.props
    return (
      <AntButton {...this.props} block>
        {label}
      </AntButton>
    )
  }
}
