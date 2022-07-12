interface IAddressResponse {
  nome: string
}

export interface ICitiesResponse {
  data: Array<IAddressResponse>
}

export interface IUFsResponse {
  data: Array<string>
}
