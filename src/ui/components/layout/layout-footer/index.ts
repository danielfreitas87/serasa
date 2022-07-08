import { LayoutFooter } from './layout-footer.component'
import styled from 'styled-components'

export const StyledLayoutFooter = styled(LayoutFooter)`
  &.ant-layout-footer {
    background: #f2f2f2;
    text-align: center;
    color: ${(props) => props.theme.colors.primary};
  }
`
