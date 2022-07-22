import React, { Component } from 'react'
import { Col, Table as AntTable, TableProps } from 'antd'

interface Props extends TableProps<any> {
  className: string
}

export class Table extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { className, ...rest } = this.props
    return (
      <Col className={className}>
        <AntTable {...rest} />
      </Col>
    )
  }
}
