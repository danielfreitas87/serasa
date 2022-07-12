import React, { Component } from 'react'
import { Card, Col, Row, Statistic } from 'antd'
import { StyledPieChart, StyledTitle } from '@components'
import { connect } from 'react-redux'
import { RootState } from '@store'
import { IProducer } from '@interfaces'
import { fetchCrops, fetchProducers } from '@actions'
import './style.less'
import {
  getTotalAreaAcre,
  mapCropsToChartData,
  mapSoilToChartData,
  mapStatesToChartData,
} from '@helpers'

type Props = {
  producers: Array<IProducer>
  crops: Array<string>
  fetchProducersDispatched: () => void
  fetchCropsDispatched: () => void
}

const colResponsive = {
  xs: { span: 24 },
  sm: { span: 12 },
}

class HomePage extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchCropsDispatched()
    this.props.fetchProducersDispatched()
  }

  render() {
    const { producers, crops } = this.props
    return (
      <Row gutter={16}>
        <Col span={24}>
          <Row justify='center'>
            <StyledTitle label='Dashboard' />
          </Row>
        </Col>
        <Col {...colResponsive} className='dashboard-card'>
          <Card>
            <Statistic
              title='Quantidade de fazendas'
              value={producers?.length}
            />
          </Card>
        </Col>
        <Col {...colResponsive} className='dashboard-card'>
          <Card>
            <Statistic
              title='Área total de fazendas'
              value={getTotalAreaAcre(producers)}
              suffix='hectares'
            />
          </Card>
        </Col>
        {producers?.length && (
          <Col {...colResponsive}>
            <Statistic
              title='Total de produtores por Estado'
              valueRender={() => (
                <StyledPieChart data={mapStatesToChartData(producers)} />
              )}
            />
          </Col>
        )}
        {producers?.length && crops?.length && (
          <Col {...colResponsive}>
            <Statistic
              title='Total de produtores por cultivo'
              valueRender={() => (
                <StyledPieChart data={mapCropsToChartData(producers, crops)} />
              )}
            />
          </Col>
        )}
        {producers?.length && (
          <Col {...colResponsive}>
            <Statistic
              title='Área por uso do solo (hectares)'
              valueRender={() => (
                <StyledPieChart data={mapSoilToChartData(producers)} />
              )}
            />
          </Col>
        )}
      </Row>
    )
  }
}

const mapStateToProps = ({ producers, crops }: RootState) => ({
  producers: producers.producers,
  crops: crops.crops,
})

const mapDispatchToProps = {
  fetchCropsDispatched: fetchCrops,
  fetchProducersDispatched: fetchProducers,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
