import { ThemeColorEnum } from '@enums'
import { TitleProps } from 'antd/lib/typography/Title'

export declare const ITitleLevel: [1, 2, 3, 4, 5]

export interface ITitle extends TitleProps {
  label: string
  level?: typeof ITitleLevel[number]
  color?: keyof typeof ThemeColorEnum
  className?: string
}
