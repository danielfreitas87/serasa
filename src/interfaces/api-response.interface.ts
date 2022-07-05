export interface IApiStatus {
  status: number
}

export interface IApiResponse extends IApiStatus {
  data: any
}
