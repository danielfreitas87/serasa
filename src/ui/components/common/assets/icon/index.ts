import { Icon } from './icon.component'
import styled from 'styled-components'

const defaultProps = {
  color: '#fff',
  size: 24,
}

export const StyledIcon = styled(Icon)`
  &.anticon {
    color: ${(props) => props?.color};
    font-size: ${(props) => props?.size}px;
  }
`

StyledIcon.defaultProps = defaultProps
