import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyledIcon } from '@components'
import { removeProducer } from '@actions'
import { IIcon } from '@interfaces'
import { ThemeColorEnum } from '@enums'

const FIRST_INDEX = '0'

interface Props extends IIcon {
  removeProducerDispatched: (key: string) => void
  producerKey: string | undefined
  color?: keyof typeof ThemeColorEnum
}

class RemoveProducerButton extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  onRemoveProducer = () =>
    this.props.removeProducerDispatched(
      this.props?.producerKey || FIRST_INDEX.toString(),
    )

  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { removeProducerDispatched, producerKey, ...rest } = this.props
    return <StyledIcon {...rest} onClick={this.onRemoveProducer} size={18} />
  }
}

const mapDispatchToProps = {
  removeProducerDispatched: removeProducer,
}

export const RemoveProducerButtonConnected = connect(
  null,
  mapDispatchToProps,
)(RemoveProducerButton)
