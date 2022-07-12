import { IBaseState } from './base-state.interface'

export interface IProducer {
  key?: string
  name: string
  document: string
  state: string
  city: string
  farmableAreaAcre: number
  vegetationAreaAcre: number
  totalAreaAcre: number
  crops: Array<string>
}

export interface IProducerState extends IBaseState {
  producers: Array<IProducer>
  editingProducer: IProducer | null
  isEditing: boolean
}
