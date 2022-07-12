import React, { Component } from 'react'
import { Button as AntButton } from 'antd'
import { IButton } from '@interfaces'

export class Button extends Component<IButton> {
  constructor(props: IButton) {
    super(props)
  }

  render() {
    const { label, ...rest } = this.props
    return (
      <AntButton {...rest} block>
        {label}
      </AntButton>
    )
  }
}
