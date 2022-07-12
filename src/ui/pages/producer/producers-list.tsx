import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Row, Table, Typography } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import {
  StyledDivider,
  StyledEditProducerButton,
  StyledRemoveProducerButton,
  StyledTitle,
} from '@components'
import { IProducer } from '@interfaces'
import { RootState } from '@store'
import { fetchProducers } from '@actions'

const { Text } = Typography

const columns: ColumnsType<IProducer> = [
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Documento',
    dataIndex: 'document',
    key: 'document',
  },
  {
    title: 'Estado',
    dataIndex: 'state',
    key: 'state',
  },
  {
    title: 'Cidade',
    dataIndex: 'city',
    key: 'city',
  },
  {
    title: 'Área em hectares',
    children: [
      {
        title: 'Cultivável',
        dataIndex: 'farmableAreaAcre',
        key: 'farmableAreaAcre',
      },
      {
        title: 'Vegetação',
        dataIndex: 'vegetationAreaAcre',
        key: 'vegetationAreaAcre',
      },
      {
        title: 'Total da Fazenda',
        dataIndex: 'totalAreaAcre',
        key: 'totalAreaAcre',
      },
    ],
  },
  {
    title: 'Plantios',
    dataIndex: 'crops',
    key: 'crops',
    render: (_, { crops }) => <Text>{crops?.join(', ')}</Text>,
  },
  {
    title: 'Ações',
    dataIndex: 'actions',
    key: 'actions',
    fixed: 'right',
    render: (_, producer: IProducer) => (
      <>
        <StyledEditProducerButton
          component={EditOutlined}
          producer={producer}
        />
        <StyledDivider type='vertical' />
        <StyledRemoveProducerButton
          component={DeleteOutlined}
          producerKey={producer.key}
        />
      </>
    ),
  },
]

type Props = {
  producers: Array<IProducer>
  fetchProducersDispatched: () => void
}

class ProducersListPage extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchProducersDispatched()
  }

  render() {
    return (
      <Row justify='center'>
        <Col>
          <Row justify='center'>
            <StyledTitle label='Lista de Produtores Rurais' />
          </Row>
          <Table
            columns={columns}
            dataSource={this.props.producers}
            bordered
            size='middle'
            scroll={{ x: 1500 }}
          />
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = ({ producers }: RootState) => ({
  producers: producers.producers,
})

const mapDispatchToProps = {
  fetchProducersDispatched: fetchProducers,
}

export const ProducersListPageConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProducersListPage)
