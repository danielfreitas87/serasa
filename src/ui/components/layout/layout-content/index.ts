import { LayoutContentConnected } from './layout-content.component'
import styled from 'styled-components'

export const StyledLayoutContent = styled(LayoutContentConnected)`
  &.ant-layout-content {
    padding: 0 50px;
    background-color: ${(props) => props.theme.colors.white};
  }

  &.ant-layout-content > .ant-layout {
    padding: 24px 0;
    background-color: ${(props) => props.theme.colors.white};
  }

  &.ant-layout-content > .ant-layout > .ant-layout-content {
    padding: 0 24px;
  }

  span.ant-menu-title-content {
    color: ${(props) => props.theme.colors.primary};
  }

  .ant-layout-sider-children {
    background-color: ${(props) => props.theme.colors.white};
  }

  aside.ant-layout-sider.ant-layout-sider-dark {
    background-color: ${(props) => props.theme.colors.white};
  }
`
