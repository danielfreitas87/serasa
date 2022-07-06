import { SpinProps as AntSpintProps } from 'antd'
import { SpinIndicator } from 'antd/lib/spin'
import { ThemeColorEnum } from '@enums'

export interface ISpinner extends AntSpintProps {
  icon?: SpinIndicator
  color?: keyof typeof ThemeColorEnum
}
