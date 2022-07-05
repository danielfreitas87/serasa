import { ThemeColorEnum } from '@enums'
import { ButtonProps as AntButtonProps } from 'antd'

export interface IButton
  extends AntButtonProps {
  label: string
  color?: keyof typeof ThemeColorEnum
}
