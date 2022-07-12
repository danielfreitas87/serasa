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
import { changeCurrentPage, setEditingProducer } from '@actions'

const { Content, Sider } = Layout

interface Props extends BasicProps {
  currentPage: number
  changeCurrentPageDispatched: (pageNumber: number) => void
  setEditingProducerDispatched: (producer: IProducer | null) => void
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
  }

  changeSiderItem({ keyPath }: MenuInfo) {
    this.props.setEditingProducerDispatched(null)
    this.props.changeCurrentPageDispatched(Number(keyPath['0']))
  }

  render() {
    const {
      currentPage,
      changeCurrentPageDispatched,
      setEditingProducerDispatched,
      ...rest
    } = this.props
    const { menuItems, routes } = this.state
    return (
      <Content {...rest}>
        <Layout>
          <Sider breakpoint='md' collapsedWidth={0}>
            <Menu
              mode='inline'
              items={menuItems}
              onClick={this.changeSiderItem}
              defaultOpenKeys={['1']}
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
}

export const LayoutContentConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LayoutContent)
