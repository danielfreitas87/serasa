import React, { Component, Key } from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'antd'
import { StyledTable, StyledTag, StyledTitle } from '@components'
import { IProducer } from '@interfaces'
import { RootState } from '@store'
import { ProducersListActionButtons } from './producers-list-actions'
import { COLUMNS, ACTIONS_KEY } from './producers-list-columns'
import { ProducerEnum } from '@enums'

const TABLE_SCROLL = { x: 1500 }

const getRenderComponent = (
  values: string | Array<string>,
  producer: IProducer,
  column?: Key,
) => {
  switch (column) {
    case ProducerEnum.CROPS:
      return (
        Array.isArray(values) &&
        values.map((crop: string) => (
          <StyledTag key={crop} label={crop} tagColor='secondary' />
        ))
      )
    case ACTIONS_KEY:
      return <ProducersListActionButtons producer={producer} />
    default:
      return values
  }
}

const columns = COLUMNS.map((column) => ({
  ...column,
  render: (values: string | Array<string>, producer: IProducer) =>
    getRenderComponent(values, producer, column.key),
}))

type Props = {
  producers: Array<IProducer>
  isLoading: boolean
}

class ProducersListPage extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { producers, isLoading } = this.props
    return (
      <Row justify='center'>
        <Col>
          <Row justify='center'>
            <StyledTitle label='Lista de Produtores Rurais' />
          </Row>
          <StyledTable
            className='producers-list'
            size='middle'
            columns={columns}
            dataSource={producers}
            loading={isLoading}
            scroll={TABLE_SCROLL}
            bordered
          />
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = ({ producers }: RootState) => ({
  producers: producers.producers,
  isLoading: producers.loading,
})

export default connect(mapStateToProps)(ProducersListPage)
