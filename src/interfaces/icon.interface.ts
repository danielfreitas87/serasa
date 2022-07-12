export interface IIcon {
  component: React.ForwardRefExoticComponent<any>
  onClick?: () => void
  color?: string
  size?: number
}
