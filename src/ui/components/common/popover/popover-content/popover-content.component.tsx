import React, { Component } from 'react'
import { Col, Row, Typography } from 'antd'
import { WarningOutlined } from '@ant-design/icons'
import { StyledButton, StyledIcon } from '@components'

const { Text } = Typography

type ConfirmButtonProps = {
  onConfirm: () => void
}

const ConfirmButton = ({ onConfirm }: ConfirmButtonProps) => (
  <StyledButton label='Sim' color='secondary' onClick={onConfirm} />
)

type CancelButtonProps = {
  onCancel: () => void
}

const CancelButton = ({ onCancel }: CancelButtonProps) => (
  <StyledButton label='Não' color='primary' onClick={onCancel} />
)

const IconButton = () => (
  <StyledIcon component={WarningOutlined} color='secondary' size={20} />
)

type Props = {
  label: string
  onConfirm: () => void
  onCancel: () => void
}

export class PopoverContent extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { label, onConfirm, onCancel } = this.props
    return (
      <Col>
        <Row justify='space-between' align='middle'>
          <Col span={3}>
            <IconButton />
          </Col>
          <Col span={21}>
            <Text>{label}</Text>
          </Col>
        </Row>
        <Row justify='space-between'>
          <Col span={11}>
            <CancelButton onCancel={onCancel} />
          </Col>
          <Col span={11}>
            <ConfirmButton onConfirm={onConfirm} />
          </Col>
        </Row>
      </Col>
    )
  }
}
