import { IBaseState } from './base-state.interface'

export interface IUserLogin {
  email: string
  password: string
}

export interface ILoginState extends IBaseState {
  token: string
}
