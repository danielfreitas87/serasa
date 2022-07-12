import { formError } from '@validations'

const TOTAL_AREA_ACRE = 'totalAreaAcre'
const FARMABLE_AREA_ACRE = 'farmableAreaAcre'
const VEGETATION_AREA_ACRE = 'vegetationAreaAcre'

export const totalAreaAcreValidator = ({ getFieldValue, setFields }: any) => ({
  validator: () => {
    const totalAreaAcre = getFieldValue(TOTAL_AREA_ACRE) ?? 0
    const farmableAreaAcre = getFieldValue(FARMABLE_AREA_ACRE) ?? 0
    const vegetationAreaAcre = getFieldValue(VEGETATION_AREA_ACRE) ?? 0
    if (vegetationAreaAcre + farmableAreaAcre <= totalAreaAcre) {
      setFields([
        { name: TOTAL_AREA_ACRE, errors: [] },
        { name: FARMABLE_AREA_ACRE, errors: [] },
        { name: VEGETATION_AREA_ACRE, errors: [] },
      ])
      return Promise.resolve()
    }
    return Promise.reject(formError.totalAreaAcre.total)
  },
})
