import { LayoutFooter } from './layout-footer.component'
import styled from 'styled-components'

export const StyledLayoutFooter = styled(LayoutFooter)`
  &.ant-layout-footer {
    text-align: center;
    color: ${(props) => props.theme.colors.primary};
    background: ${(props) => props.theme.colors.lightGray};
  }
`
