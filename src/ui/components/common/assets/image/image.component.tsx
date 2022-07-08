import React, { Component } from 'react'
import { Image as AntImage, ImageProps } from 'antd'

const defaultProps = {
  preview: false,
  width: 100,
}

export class Image extends Component {
  static defaultProps: Partial<ImageProps> = defaultProps
  render() {
    return <AntImage {...this.props} />
  }
}
