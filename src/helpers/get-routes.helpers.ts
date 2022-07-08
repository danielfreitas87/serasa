import { IMenuItem } from '@interfaces'

export function getRoutes(AuthRoutes: Array<IMenuItem>) {
  return AuthRoutes.reduce((prevRoutes, { render, children }, _, a) => {
    return children
      ? [
          ...prevRoutes,
          ...children.map((childrenItem: IMenuItem, i: number) => ({
            key: prevRoutes.length + (i + 1),
            render: childrenItem.render,
          })),
        ]
      : [
          ...prevRoutes,
          {
            key: prevRoutes.length,
            render,
          },
        ]
  }, [] as Array<IMenuItem>) as Array<IMenuItem>
}
