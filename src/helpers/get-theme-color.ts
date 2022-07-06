import { ThemeColorEnum } from '@enums'

const getColor = (theme: any, color: keyof typeof ThemeColorEnum) => {
  switch (color) {
    case ThemeColorEnum.primary:
      return theme.colors.primary
    case ThemeColorEnum.secondary:
      return theme.colors.secondary
    default:
      return undefined
  }
}

export default (theme: any, color: keyof typeof ThemeColorEnum | undefined) => {
  return getColor(theme, color || ThemeColorEnum.primary)
}
