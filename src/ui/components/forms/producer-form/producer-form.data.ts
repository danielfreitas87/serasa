import { CheckboxOptionType } from 'antd'
import { DocumentEnum, ProducerEnum } from '@enums'

export const PRODUCER_FORM_INITIAL_VALUES = {
  [ProducerEnum.FARMABLE_ACRE]: 0,
  [ProducerEnum.VEGETATION_ACRE]: 0,
  [ProducerEnum.TOTAL_ACRE]: 0,
}

export const PRODUCER_FORM_DOCUMENT_TYPES: Array<CheckboxOptionType> = [
  {
    label: DocumentEnum.CPF,
    value: DocumentEnum.CPF,
  },
  {
    label: DocumentEnum.CNPJ,
    value: DocumentEnum.CNPJ,
  },
]
