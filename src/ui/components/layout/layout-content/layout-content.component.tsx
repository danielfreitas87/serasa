import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import { AuthRoutes } from '@routes'
import { IMenuItem, IProducer } from '@interfaces'
import { BasicProps } from 'antd/lib/layout/layout'
import { getMenuItems, getRoutes } from '@helpers'
import { MenuInfo } from 'rc-menu/lib/interface'
import { ItemType } from 'antd/lib/menu/hooks/useItems'
import { connect } from 'react-redux'
import { RootState } from '@store'
import {
  changeCurrentPage,
  fetchCrops,
  fetchProducers,
  setEditingProducer,
} from '@actions'

const { Content, Sider } = Layout
const FIRST_INDEX = 0
const SECOND_INDEX = 1

interface Props extends BasicProps {
  currentPage: number
  changeCurrentPageDispatched: (pageNumber: number) => void
  setEditingProducerDispatched: (producer: IProducer | null) => void
  fetchCropsDispatched: () => void
  fetchProducersDispatched: () => void
}

type State = {
  menuItems: Array<ItemType>
  routes: Array<IMenuItem>
}

class LayoutContent extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      menuItems: [],
      routes: [],
    }

    this.changeSiderItem = this.changeSiderItem.bind(this)
  }

  componentDidMount() {
    this.setState({ menuItems: getMenuItems(AuthRoutes) })
    this.setState({ routes: getRoutes(AuthRoutes) })
    this.props.fetchCropsDispatched()
    this.props.fetchProducersDispatched()
  }

  changeSiderItem({ keyPath }: MenuInfo) {
    this.props.setEditingProducerDispatched(null)
    this.props.changeCurrentPageDispatched(Number(keyPath[FIRST_INDEX]))
  }

  render() {
    const { currentPage, className } = this.props
    const { menuItems, routes } = this.state
    return (
      <Content className={className}>
        <Layout>
          <Sider breakpoint='md' collapsedWidth={FIRST_INDEX} width={220}>
            <Menu
              mode='inline'
              items={menuItems}
              onClick={this.changeSiderItem}
              defaultOpenKeys={[SECOND_INDEX.toString()]}
              selectedKeys={[currentPage.toString()]}
            />
          </Sider>
          <Content>{routes[Number(currentPage)]?.render}</Content>
        </Layout>
      </Content>
    )
  }
}

const mapStateToProps = ({ page }: RootState) => ({
  currentPage: page.currentPage,
})

const mapDispatchToProps = {
  changeCurrentPageDispatched: changeCurrentPage,
  setEditingProducerDispatched: setEditingProducer,
  fetchCropsDispatched: fetchCrops,
  fetchProducersDispatched: fetchProducers,
}

export const LayoutContentConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LayoutContent)
