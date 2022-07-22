import { SortOrder } from 'antd/lib/table/interface'

const sort = (
  prev: number | string | Array<string>,
  curr: number | string | Array<string>,
) => {
  if (Array.isArray(prev) && Array.isArray(curr))
    return prev.length - curr.length
  return Number.isNaN(prev)
    ? Number(prev) - Number(curr)
    : prev.toString().localeCompare(curr.toString())
}

export const sortOptions = (field: any) => ({
  ellipsis: true,
  defaultSortOrder: 'descend' as SortOrder,
  sorter: (prev: any, curr: any) => sort(prev[field], curr[field]),
})
