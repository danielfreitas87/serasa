import styled from 'styled-components'
import { RemoveProducerButtonConnected } from './remove-producer-button.component'
import { getThemeColor } from '@helpers'
import { ThemeColorEnum } from '@enums'

const defaultProps = {
  color: ThemeColorEnum.secondary,
}

export const StyledRemoveProducerButton = styled(RemoveProducerButtonConnected)`
  ${(props) => {
    const themeColor = getThemeColor(props.theme, props?.color)
    return themeColor && `color: ${themeColor};`
  }}
`

StyledRemoveProducerButton.defaultProps = defaultProps
