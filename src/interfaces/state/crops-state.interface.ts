import { IBaseState } from '@interfaces'

export interface ICropsState extends IBaseState {
  crops: Array<string> | null
}
