import React, { Component } from 'react'
import { Col, Spin as AntSpin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { ISpinner } from '@interfaces'
import { ThemeColorEnum } from '@enums'

type IconProps = {
  color?: keyof typeof ThemeColorEnum
}

class Icon extends Component<IconProps> {
  render() {
    const { color } = this.props
    return <LoadingOutlined color={color} spin />
  }
}

export class Spinner extends Component<ISpinner> {
  render() {
    const { color } = this.props
    return (
      <Col {...this.props}>
        <AntSpin indicator={<Icon color={color} />} />
      </Col>
    )
  }
}
