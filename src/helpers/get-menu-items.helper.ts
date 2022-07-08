import { IMenuItem } from '@interfaces'
import { ItemType } from 'antd/lib/menu/hooks/useItems'

export function getMenuItems(AuthRoutes: Array<IMenuItem>) {
  return AuthRoutes.reduce((prevRoutes, { label, children, render }) => {
    const prevRoute = prevRoutes[prevRoutes.length - 1]
    const prevRouteChildren = prevRoute?.children
    const lastIndex = prevRouteChildren
      ? prevRouteChildren[prevRouteChildren.length - 1].key
      : prevRoute?.key
    const firstOrLastIndex = lastIndex ?? -1
    const keyOrUndefined = render ? { key: firstOrLastIndex + 1 } : undefined
    return [
      ...prevRoutes,
      {
        ...keyOrUndefined,
        label,
        children: children?.map((childrenItem: IMenuItem, i: number) => ({
          key: firstOrLastIndex + (i + 1),
          label: childrenItem.label,
        })),
      },
    ]
  }, [] as Array<IMenuItem>) as Array<ItemType>
}
