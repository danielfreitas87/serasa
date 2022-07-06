import { IApiResponseStatus } from './api-response-status.interface'
import { ILoginState } from './login.interface'

export interface IApiResponseLogin extends IApiResponseStatus {
  data: ILoginState
  error: string
}
