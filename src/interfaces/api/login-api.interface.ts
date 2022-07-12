import { ILoginState, IStatusResponse } from '@interfaces'

export interface ILoginResponse extends IStatusResponse {
  data: ILoginState
  error: string
}
