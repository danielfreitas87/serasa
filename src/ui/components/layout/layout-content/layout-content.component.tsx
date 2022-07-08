import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import { AuthRoutes } from '@routes'
import { IMenuItem } from '@interfaces'
import { BasicProps } from 'antd/lib/layout/layout'
import { MenuInfo } from 'rc-menu/lib/interface'
import { getMenuItems, getRoutes } from '@helpers'
import { ItemType } from 'antd/lib/menu/hooks/useItems'

const { Content, Sider } = Layout

const FIRST_INDEX = '0'

type State = {
  menuItems: Array<ItemType>
  routes: Array<IMenuItem>
  currentRoute: string
}

export class LayoutContent extends Component<BasicProps, State> {
  constructor(props: BasicProps) {
    super(props)

    this.state = {
      menuItems: [],
      routes: [],
      currentRoute: FIRST_INDEX,
    }

    this.changeSiderItem = this.changeSiderItem.bind(this)
  }

  componentDidMount() {
    this.setState({ menuItems: getMenuItems(AuthRoutes) })
    this.setState({ routes: getRoutes(AuthRoutes) })
  }

  changeSiderItem({ keyPath }: MenuInfo) {
    this.setState({
      currentRoute: keyPath[FIRST_INDEX],
    })
  }

  render() {
    const { menuItems, routes, currentRoute } = this.state
    return (
      <Content {...this.props}>
        <Layout>
          <Sider breakpoint='md' collapsedWidth={FIRST_INDEX}>
            <Menu
              mode='inline'
              defaultSelectedKeys={[FIRST_INDEX]}
              items={menuItems}
              onClick={this.changeSiderItem}
            />
          </Sider>
          <Content>{routes[Number(currentRoute)]?.render}</Content>
        </Layout>
      </Content>
    )
  }
}
