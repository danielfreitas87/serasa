import React, { Component } from 'react'
import { Col, Row } from 'antd'
import { connect } from 'react-redux'
import { ProducerForm, StyledTitle } from '@components'
import { changeCurrentPage, saveProducer } from '@actions'
import { IProducer } from '@interfaces'

const responsive = {
  xs: { span: 24 },
  sm: { span: 20 },
  md: { span: 18 },
  lg: { span: 16 },
  xl: { span: 14 },
}

type Props = {
  saveProducerDispatched: (producer: IProducer) => void
  changeCurrentPageDispatched: (pageNumber: number) => void
}

class ProducerEditPage extends Component<Props> {
  constructor(props: Props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit = (producer: IProducer) =>
    this.props.saveProducerDispatched(producer)

  render() {
    return (
      <Row justify='center'>
        <Col {...responsive}>
          <Row justify='center'>
            <StyledTitle label='Cadastro de Produtor Rural' />
          </Row>
          <ProducerForm onFinish={this.onSubmit} />
        </Col>
      </Row>
    )
  }
}

const mapDispatchToProps = {
  saveProducerDispatched: saveProducer,
  changeCurrentPageDispatched: changeCurrentPage,
}

export const ProducerEditPageConnected = connect(
  null,
  mapDispatchToProps,
)(ProducerEditPage)
