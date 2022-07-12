import styled from 'styled-components'
import { Divider } from './divider.component'
import { getThemeColor } from '@helpers'
import { ThemeColorEnum } from '@enums'

const defaultProps = {
  color: ThemeColorEnum.primary,
}

export const StyledDivider = styled(Divider)`
  span.ant-divider-inner-text {
    ${(props) => {
      const themeColor = getThemeColor(props.theme, props?.color)
      return themeColor && `color: ${themeColor};`
    }}
`

StyledDivider.defaultProps = defaultProps
