import { LayoutHeader } from './layout-header.component'
import styled from 'styled-components'

export const StyledLayoutHeader = styled(LayoutHeader)`
  &.ant-layout-header {
    background: rgb(2, 0, 36);
    background: -moz-linear-gradient(
      100deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(29, 79, 145, 1) 100%,
      rgba(0, 212, 255, 1) 100%
    );
    background: -webkit-linear-gradient(
      100deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(29, 79, 145, 1) 100%,
      rgba(0, 212, 255, 1) 100%
    );
    background: linear-gradient(
      100deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(29, 79, 145, 1) 100%,
      rgba(0, 212, 255, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024",endColorstr="#00d4ff",GradientType=1);
  }

  span > .anticon {
    padding-top: 24px;
  }
`
