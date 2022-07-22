import React, { Component } from 'react'
import { Col, Row } from 'antd'
import { connect } from 'react-redux'
import { ProducerForm, StyledTitle } from '@components'
import { changeCurrentPage, saveProducer } from '@actions'
import { IProducer } from '@interfaces'
import { RootState } from '@store'

const pageTitle = (editingProducer: IProducer | null) =>
  `${editingProducer ? 'Edição' : 'Criação'} de Produtor Rural`

const responsive = {
  xs: { span: 24 },
  sm: { span: 20 },
  md: { span: 18 },
  lg: { span: 16 },
  xl: { span: 14 },
}

type Props = {
  editingProducer: IProducer | null
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
    const { editingProducer } = this.props
    return (
      <Row justify='center'>
        <Col {...responsive}>
          <Row justify='center'>
            <StyledTitle label={pageTitle(editingProducer)} />
          </Row>
          <ProducerForm
            onFinish={this.onSubmit}
            editingProducer={editingProducer}
          />
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = ({ producers }: RootState) => ({
  editingProducer: producers.editingProducer,
})

const mapDispatchToProps = {
  saveProducerDispatched: saveProducer,
  changeCurrentPageDispatched: changeCurrentPage,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProducerEditPage)
