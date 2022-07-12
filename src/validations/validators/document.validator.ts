import { DocumentEnum } from '@enums'
import { onlyNumbersRegex, validateCNPJ, validateCPF } from '@helpers'
import { formError } from '@validations'

export const documentValidator = {
  validator: (_: any, value = '') => {
    const documentType =
      value.length === 14 ? DocumentEnum.CPF : DocumentEnum.CNPJ
    const document = onlyNumbersRegex(value)
    const isValidCPF = document?.length === 11 && validateCPF(document)
    const isValidCNPJ = document?.length === 14 && validateCNPJ(document)
    if (
      !document ||
      document.length < 11 ||
      (documentType === DocumentEnum.CNPJ &&
        document.length >= 11 &&
        document.length < 14)
    )
      return Promise.resolve()
    if (isValidCPF || isValidCNPJ) return Promise.resolve()
    const error = formError.document(documentType)
    return Promise.reject(error)
  },
}
