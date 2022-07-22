/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyledIcon, StyledPopover } from '@components'
import { removeProducer } from '@actions'
import { IIcon } from '@interfaces'
import { ThemeColorEnum } from '@enums'

const FIRST_INDEX = '0'

interface Props extends IIcon {
  removeProducerDispatched: (key: string) => void
  producerKey: string
  confirmationMessage: string
  color?: ThemeColorEnum
}

class RemoveProducerButton extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  onConfirm = () =>
    this.props.removeProducerDispatched(
      this.props?.producerKey || FIRST_INDEX.toString(),
    )

  render() {
    const {
      confirmationMessage,
      removeProducerDispatched,
      producerKey,
      ...rest
    } = this.props
    return (
      <StyledPopover label={confirmationMessage} onConfirm={this.onConfirm}>
        <StyledIcon {...rest} />
      </StyledPopover>
    )
  }
}

const mapDispatchToProps = {
  removeProducerDispatched: removeProducer,
}

export const RemoveProducerButtonConnected = connect(
  null,
  mapDispatchToProps,
)(RemoveProducerButton)
