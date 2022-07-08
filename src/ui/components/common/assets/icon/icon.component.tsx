import React, { Component } from 'react'
import AntIcon from '@ant-design/icons'
import { IIcon } from '@interfaces'

export class Icon extends Component<IIcon> {
  render() {
    return <AntIcon {...this.props} />
  }
}
