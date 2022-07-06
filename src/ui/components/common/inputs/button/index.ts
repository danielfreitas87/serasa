import { Button } from './button.component'
import styled from 'styled-components'
import { getThemeColor } from '@helpers'
import { ThemeColorEnum } from '@enums'
import { ButtonType } from 'antd/lib/button'
import { ButtonHTMLType } from 'antd/lib/button/button'

const defaultProps = {
  color: ThemeColorEnum.secondary,
  type: 'primary' as ButtonType,
  htmlType: 'submit' as ButtonHTMLType,
}

export const StyledButton = styled(Button)`
  &.ant-btn-primary {
    border-radius: 5px;
    ${(props) => {
      const themeColor = getThemeColor(props.theme, props.color)
      return (
        themeColor &&
        [
          `background-color: ${themeColor};`,
          `border-color: ${themeColor};`,
        ].join('')
      )
    }}
`

StyledButton.defaultProps = defaultProps
