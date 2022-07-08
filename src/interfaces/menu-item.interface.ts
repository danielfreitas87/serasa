import { ReactNode } from 'react'

export interface IMenuItem {
  label?: string
  children?: Array<IMenuItem>
  render?: ReactNode
  key?: number
}
