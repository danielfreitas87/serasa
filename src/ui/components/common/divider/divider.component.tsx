import React, { Component } from 'react'
import { Divider as AntDivider } from 'antd'
import { IDivider } from '@interfaces'

type DividerOrientation = {
  orientation: 'left' | 'right' | 'center'
}

const defaultProps = {
  orientation: 'left' as DividerOrientation['orientation'],
}

export class Divider extends Component<IDivider> {
  static defaultProps: Partial<IDivider> = defaultProps

  constructor(props: IDivider) {
    super(props)
  }

  render() {
    const { label, ...rest } = this.props
    return <AntDivider {...rest}>{label}</AntDivider>
  }
}
