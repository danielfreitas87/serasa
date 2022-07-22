import styled from 'styled-components'
import { Tag } from './tag.component'
import { getThemeColor } from '@helpers'

export const StyledTag = styled(Tag)`
  ${(props) => {
    const themeColor = getThemeColor(props.theme, props?.tagColor)
    return (
      themeColor &&
      `
      background-color: ${themeColor};
      color: ${props.theme.colors.white}
    `
    )
  }}
`
