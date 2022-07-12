import styled from 'styled-components'
import { EditProducerButtonConnected } from './edit-producer-button.component'
import { getThemeColor } from '@helpers'
import { ThemeColorEnum } from '@enums'

const defaultProps = {
  color: ThemeColorEnum.secondary,
}

export const StyledEditProducerButton = styled(EditProducerButtonConnected)`
  ${(props) => {
    const themeColor = getThemeColor(props.theme, props?.color)
    return themeColor && `color: ${themeColor};`
  }}
`

StyledEditProducerButton.defaultProps = defaultProps
