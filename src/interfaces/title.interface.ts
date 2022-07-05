import { ThemeColorEnum } from '@enums'

export interface ITitle {
  label: string
  level?: 3 | 1 | 5 | 2 | 4
  color?: keyof typeof ThemeColorEnum
  className?: string
}
