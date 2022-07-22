import { ProducerEnum } from '@enums'
import { formError } from '@validations'

export const totalAcreValidator = ({ getFieldValue, setFields }: any) => ({
  validator: () => {
    const farmableAcre = getFieldValue(ProducerEnum.FARMABLE_ACRE) ?? 0
    const vegetationAcre = getFieldValue(ProducerEnum.VEGETATION_ACRE) ?? 0
    const totalAcre = getFieldValue(ProducerEnum.TOTAL_ACRE) ?? 0
    if (vegetationAcre + farmableAcre <= totalAcre) {
      setFields([
        { name: ProducerEnum.FARMABLE_ACRE, errors: [] },
        { name: ProducerEnum.VEGETATION_ACRE, errors: [] },
        { name: ProducerEnum.TOTAL_ACRE, errors: [] },
      ])
      return Promise.resolve()
    }
    return Promise.reject(formError.totalAcre)
  },
})
