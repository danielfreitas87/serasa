import { ThemeColorEnum } from '@enums'
import { TagProps } from 'antd'

export interface ITag extends TagProps {
  label: string
  tagColor: keyof typeof ThemeColorEnum
}
