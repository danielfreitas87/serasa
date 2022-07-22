import { ThemeColorEnum } from '@enums'

export interface IIcon {
  component: React.ForwardRefExoticComponent<any>
  onClick?: () => void
  color?: keyof typeof ThemeColorEnum
  size?: number
}
