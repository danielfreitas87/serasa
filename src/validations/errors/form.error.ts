export const formError = {
  document: (documentType: string) => `${documentType} inválido.`,
  totalAreaAcre: {
    total: 'A soma das áreas não pode ser superior ao total da fazenda.',
    min: 'Este valor não pode ser 0.',
  },
}
