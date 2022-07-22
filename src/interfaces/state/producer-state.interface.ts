import { IBaseState } from './base-state.interface'

export interface IProducer {
  key?: string
  name: string
  document: string
  state: string
  city: string
  farmableAcre: number
  vegetationAcre: number
  totalAcre: number
  crops: Array<string>
}

export interface IProducerState extends IBaseState {
  producers: Array<IProducer> | null
  editingProducer: IProducer | null
  isEditing: boolean
}
