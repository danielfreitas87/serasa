export function onlyNumbersRegex(text: string) {
  if (!text) return null
  return text.replace(/[^0-9]/g, '')
}

export function validateCPF(cpf: string) {
  const formattedCpf = onlyNumbersRegex(cpf)
  if (!formattedCpf || formattedCpf.length !== 11) return false
  let sum = 0
  let rest = 0
  if (cpf === '00000000000') return false

  for (let i = 1; i <= 9; i++)
    sum = sum + parseInt(formattedCpf.substring(i - 1, i)) * (11 - i)
  rest = (sum * 10) % 11

  if (rest == 10 || rest == 11) rest = 0
  if (rest != parseInt(formattedCpf.substring(9, 10))) return false

  sum = 0
  for (let i = 1; i <= 10; i++)
    sum = sum + parseInt(formattedCpf.substring(i - 1, i)) * (12 - i)
  rest = (sum * 10) % 11

  if (rest === 10 || rest === 11) rest = 0
  if (rest != parseInt(formattedCpf.substring(10, 11))) return false
  return true
}

export function validateCNPJ(cnpj: string) {
  const formattedCnpj = onlyNumbersRegex(cnpj)
  if (!formattedCnpj || formattedCnpj.length !== 14) return false

  if (
    formattedCnpj == '00000000000000' ||
    formattedCnpj == '11111111111111' ||
    formattedCnpj == '22222222222222' ||
    formattedCnpj == '33333333333333' ||
    formattedCnpj == '44444444444444' ||
    formattedCnpj == '55555555555555' ||
    formattedCnpj == '66666666666666' ||
    formattedCnpj == '77777777777777' ||
    formattedCnpj == '88888888888888' ||
    formattedCnpj == '99999999999999'
  )
    return false

  let tamanho = cnpj.length - 2
  let numeros = cnpj.substring(0, tamanho)
  const digitos = cnpj.substring(tamanho)
  let soma = 0
  let pos = tamanho - 7
  for (let i = tamanho; i >= 1; i--) {
    soma += Number(numeros.charAt(tamanho - i)) * pos--
    if (pos < 2) pos = 9
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
  if (resultado != Number(digitos.charAt(0))) return false

  tamanho = tamanho + 1
  numeros = cnpj.substring(0, tamanho)
  soma = 0
  pos = tamanho - 7
  for (let i = tamanho; i >= 1; i--) {
    soma += Number(numeros.charAt(tamanho - i)) * pos--
    if (pos < 2) pos = 9
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
  if (resultado != Number(digitos.charAt(1))) return false

  return true
}
