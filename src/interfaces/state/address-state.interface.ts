import { IBaseState } from '@interfaces'
import { DefaultOptionType } from 'antd/lib/select'

export interface IAddressState extends IBaseState {
  ufs: Array<DefaultOptionType>
  cities: Array<DefaultOptionType>
}
