import { IUserLogin } from '@interfaces'

const prefix = 'LOGIN'
const DO_LOGIN = `${prefix}.DO_LOGIN`
const DO_LOGOUT = `${prefix}.DO_LOGOUT`
const DO_LOGIN_SUCCESS = `${prefix}.DO_LOGIN_SUCCESS`
const DO_LOGIN_FAILURE = `${prefix}.DO_LOGIN_FAILURE`

const doLogin = (payload: IUserLogin) => ({
  type: DO_LOGIN,
  payload,
})

const doLogout = () => ({
  type: DO_LOGOUT,
})

const doLoginSuccess = (payload: string) => ({
  type: DO_LOGIN_SUCCESS,
  payload,
})

const doLoginFailure = (payload?: string) => ({
  type: DO_LOGIN_FAILURE,
  payload,
})

export {
  DO_LOGIN,
  DO_LOGOUT,
  DO_LOGIN_SUCCESS,
  DO_LOGIN_FAILURE,
  doLogin,
  doLogout,
  doLoginSuccess,
  doLoginFailure,
}
