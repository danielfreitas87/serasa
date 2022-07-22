import styled from 'styled-components'
import { Table } from './table.component'

export const StyledTable = styled(Table)`
  thead[class*='ant-table-thead'] th {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }

  thead[class*='ant-table-thead'] th:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }
`
