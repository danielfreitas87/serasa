export const formError = {
  name: 'O nome precisa conter ao menos 3 caracteres.',
  document: (documentType: string) => `${documentType} inválido.`,
  totalAcre: 'A soma das áreas não pode ser superior ao total da fazenda.',
}
