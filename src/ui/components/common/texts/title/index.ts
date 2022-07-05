import { Title } from './title.component'
import styled from 'styled-components'
import { getThemeColor } from '@helpers'

export const StyledTitle = styled(
  Title,
)`
  &.ant-typography {
    color: ${(props) =>
      getThemeColor(
        props.theme,
        props.color,
      )};
  }
`
