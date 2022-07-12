import { ThemeColorEnum } from '@enums'
import { DividerProps } from 'antd'

export interface IDivider extends DividerProps {
  label: string
  color?: keyof typeof ThemeColorEnum
}
