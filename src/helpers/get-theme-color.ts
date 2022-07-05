import { ThemeColorEnum } from '@enums'

const getColor = (
  theme: any,
  color: keyof typeof ThemeColorEnum,
) => {
  switch (color) {
    case ThemeColorEnum[
      ThemeColorEnum.primary
    ]:
      return theme.colors.primary
    case ThemeColorEnum[
      ThemeColorEnum.secondary
    ]:
      return theme.colors.secondary
    default:
      return undefined
  }
}

export default (
  theme: any,
  color:
    | keyof typeof ThemeColorEnum
    | undefined,
) => {
  if (!color) return
  return getColor(theme, color)
}
