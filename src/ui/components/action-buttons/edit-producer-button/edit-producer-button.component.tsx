import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyledIcon } from '@components'
import { IIcon, IProducer } from '@interfaces'
import { setEditingProducer } from '@actions'
import { ThemeColorEnum } from '@enums'

interface Props extends IIcon {
  setEditingProducerDispatched: (producer: IProducer) => void
  producer: IProducer
  color?: ThemeColorEnum
}

class EditProducerButton extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  editProducer = () =>
    this.props.setEditingProducerDispatched(this.props.producer)

  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { producer, setEditingProducerDispatched, ...rest } = this.props
    return <StyledIcon {...rest} onClick={this.editProducer} />
  }
}

const mapDispatchToProps = {
  setEditingProducerDispatched: setEditingProducer,
}

export const EditProducerButtonConnected = connect(
  null,
  mapDispatchToProps,
)(EditProducerButton)
