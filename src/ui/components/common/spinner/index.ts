import styled from 'styled-components'
import { Spinner } from './spinner.component'
import { getThemeColor } from '@helpers'
import { ThemeColorEnum } from '@enums'

const defaultProps = {
  color: ThemeColorEnum.secondary,
}

export const StyledSpinner = styled(Spinner)`
  &.ant-col {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    transition: opacity 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.ant-spin {
    font-size: 48px;
    ${(props) => {
      const themeColor = getThemeColor(props.theme, props?.color)
      return themeColor && `color: ${themeColor};`
    }}
  }
`

StyledSpinner.defaultProps = defaultProps
