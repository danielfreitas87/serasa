import { ThemeColorEnum } from '@enums'
import { ButtonProps as AntButtonProps } from 'antd'
import { ButtonType, ButtonHTMLType } from 'antd/lib/button/button'

export interface IButton extends AntButtonProps {
  label: string
  type?: ButtonType
  htmlType?: ButtonHTMLType
  color?: keyof typeof ThemeColorEnum
}
