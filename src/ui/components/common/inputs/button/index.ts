import { Button } from './button.component'
import styled from 'styled-components'
import { getThemeColor } from '@helpers'

export const StyledButton = styled(Button)`
  &.ant-btn-primary {
    border-radius: 5px;
    ${(props) => {
      const themeColor = getThemeColor(props.theme, props.color)

      return [
        `background-color: ${themeColor}`,
        `border-color: ${themeColor}`,
      ].join('; ')
    }}
`
