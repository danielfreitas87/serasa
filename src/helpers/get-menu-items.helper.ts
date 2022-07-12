import { IMenuItem } from '@interfaces'
import { ItemType } from 'antd/lib/menu/hooks/useItems'

export function getMenuItems(AuthRoutes: Array<IMenuItem>) {
  return AuthRoutes.reduce((prevRoutes, { label, children }) => {
    const prevRoute = prevRoutes[prevRoutes.length - 1]
    const prevRouteChildren = prevRoute?.children
    const lastIndex = prevRouteChildren
      ? prevRouteChildren[prevRouteChildren.length - 1].key
      : prevRoute?.key
    const firstOrLastIndex = lastIndex ?? -1
    return [
      ...prevRoutes,
      {
        key: firstOrLastIndex + 1,
        label,
        children: children?.map((childrenItem: IMenuItem, index: number) => ({
          key: firstOrLastIndex + (index + 2),
          label: childrenItem.label,
        })),
      },
    ]
  }, [] as Array<IMenuItem>) as Array<ItemType>
}
