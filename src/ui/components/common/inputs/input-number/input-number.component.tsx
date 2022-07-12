import React, { Component } from 'react'
import { InputNumber as AntInputNumber, InputNumberProps } from 'antd'

const defaultProps = {
  defaultValue: 0,
}

export class InputNumber extends Component<InputNumberProps> {
  static defaultProps = defaultProps

  constructor(props: InputNumberProps) {
    super(props)
  }

  render() {
    return <AntInputNumber {...this.props} />
  }
}
