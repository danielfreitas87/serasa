import { formError } from '@validations'

export const minLengthRules = {
  validator: (_: any, value = '') => {
    if (value?.length === 0 || value?.length > 2) return Promise.resolve()
    return Promise.reject(formError.name)
  },
}
