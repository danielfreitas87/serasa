import React, { Component } from 'react'
import { Card, Col, Row, Statistic } from 'antd'
import { connect } from 'react-redux'
import { StyledPieChart, StyledTitle } from '@components'
import { RootState } from '@store'
import { IProducer } from '@interfaces'
import {
  getTotalAcre,
  mapCropsToChartData,
  mapSoilToChartData,
  mapStatesToChartData,
} from '@helpers'
import './style.less'

type Props = {
  producers: Array<IProducer>
  crops: Array<string>
}

const colResponsive = {
  xs: { span: 24 },
  lg: { span: 12 },
}

class HomePage extends Component<Props> {
  constructor(props: Props) {
    super(props)
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
              suffix='hectares'
              value={getTotalAcre(producers)}
            />
          </Card>
        </Col>
        {producers?.length && crops?.length ? (
          <>
            <Col {...colResponsive} className='dashboard-card'>
              <Card>
                <Statistic
                  title='Total de produtores por Estado'
                  valueRender={() => (
                    <StyledPieChart data={mapStatesToChartData(producers)} />
                  )}
                />
              </Card>
            </Col>
            <Col {...colResponsive} className='dashboard-card'>
              <Card>
                <Statistic
                  title='Total de produtores por cultivo'
                  valueRender={() => (
                    <StyledPieChart
                      data={mapCropsToChartData(producers, crops)}
                    />
                  )}
                />
              </Card>
            </Col>
            <Col {...colResponsive} className='dashboard-card'>
              <Card>
                <Statistic
                  title='Área por uso do solo (hectares)'
                  valueRender={() => (
                    <StyledPieChart data={mapSoilToChartData(producers)} />
                  )}
                />
              </Card>
            </Col>
          </>
        ) : null}
      </Row>
    )
  }
}

const mapStateToProps = ({ producers, crops }: RootState) => ({
  producers: producers.producers,
  crops: crops.crops,
})

export default connect(mapStateToProps)(HomePage)
