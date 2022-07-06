import { IBaseState } from './base-state'

export interface IUserLogin {
  email: string
  password: string
}

export interface ILoginState extends IBaseState {
  token: string
}
