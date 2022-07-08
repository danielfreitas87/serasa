import { LayoutContent } from './layout-content.component'
import styled from 'styled-components'

export const StyledLayoutContent = styled(LayoutContent)`
  &.ant-layout-content {
    padding: 0 50px;
    background-color: #fff;
  }

  &.ant-layout-content > .ant-layout {
    padding: 24px 0;
    background-color: #fff;
  }

  &.ant-layout-content > .ant-layout > .ant-layout-content {
    padding: 0 24px;
  }

  span.ant-menu-title-content {
    color: ${(props) => props.theme.colors.primary};
  }
`
