import React, { Component } from 'react'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import {
  StyledDivider,
  StyledEditProducerButton,
  StyledRemoveProducerButton,
} from '@components'
import { IProducer } from '@interfaces'

const ZERO = '0'

type Props = {
  producer: IProducer
}

export class ProducersListActionButtons extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { producer } = this.props
    const producerKey = producer?.key || ZERO
    return (
      <>
        <StyledEditProducerButton
          component={EditOutlined}
          producer={producer}
        />
        <StyledDivider type='vertical' color='primary' />
        <StyledRemoveProducerButton
          component={DeleteOutlined}
          producerKey={producerKey}
          confirmationMessage='Confirmar exclusão do produtor?'
        />
      </>
    )
  }
}
