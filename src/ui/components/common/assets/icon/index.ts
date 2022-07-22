import styled from 'styled-components'
import { Icon } from './icon.component'
import { getThemeColor } from '@helpers'
import { ThemeColorEnum } from '@enums'

const defaultProps = {
  color: ThemeColorEnum.primary,
  size: 24,
}

export const StyledIcon = styled(Icon)`
  &.anticon {
    font-size: ${(props) => props?.size}px;
    ${(props) => {
      const themeColor = getThemeColor(props.theme, props?.color)
      return themeColor && `color: ${themeColor};`
    }}
  }
`

StyledIcon.defaultProps = defaultProps
