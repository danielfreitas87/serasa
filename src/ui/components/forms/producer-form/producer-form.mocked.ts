import { DocumentEnum } from '@enums'
import { CheckboxOptionType } from 'antd'

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

export const PRODUCER_FORM_HECTARES = '* Área em hectares'

export const PRODUCER_FORM_INITIAL_VALUES = {
  ['totalAreaAcre']: 0,
  ['farmableAreaAcre']: 0,
  ['vegetationAreaAcre']: 0,
}
