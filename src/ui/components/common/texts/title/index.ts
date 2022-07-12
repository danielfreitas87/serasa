import styled from 'styled-components'
import { Title } from './title.component'
import { getThemeColor } from '@helpers'
import { ThemeColorEnum } from '@enums'
import { ITitleLevel } from '@interfaces'

const defaultProps = {
  color: ThemeColorEnum.primary,
  level: 3 as typeof ITitleLevel[number],
}

export const StyledTitle = styled(Title)`
  text-align: center;
  padding-bottom: 20px;
  &.ant-typography {
    ${(props) => {
      const themeColor = getThemeColor(props.theme, props?.color)
      return themeColor && `color: ${themeColor};`
    }}
`

StyledTitle.defaultProps = defaultProps
