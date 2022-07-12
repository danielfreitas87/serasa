import { IProducer } from '@interfaces'
import { formError } from '@validations'

export const minNumberRules = {
  validator: (_: any, { totalAreaAcre }: IProducer) => {
    if (totalAreaAcre > 0) return Promise.resolve()
    return Promise.reject(formError.totalAreaAcre.min)
  },
}
