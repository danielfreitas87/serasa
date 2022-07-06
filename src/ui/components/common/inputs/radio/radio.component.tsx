import React, { Component } from 'react'
import { Radio as AntRadio } from 'antd'
import { IRadio } from '@interfaces'

const { Button } = AntRadio

export class Radio extends Component<IRadio> {
  render() {
    const { label } = this.props
    return <Button {...this.props}>{label}</Button>
  }
}
