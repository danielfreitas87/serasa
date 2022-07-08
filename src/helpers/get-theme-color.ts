import { ThemeColorEnum } from '@enums'

function getColor(theme: any, color: keyof typeof ThemeColorEnum) {
  switch (color) {
    case ThemeColorEnum.primary:
      return theme.colors.primary
    case ThemeColorEnum.secondary:
      return theme.colors.secondary
    default:
      return undefined
  }
}

export function getThemeColor(
  theme: any,
  color: keyof typeof ThemeColorEnum | undefined,
) {
  return getColor(theme, color || ThemeColorEnum.primary)
}
