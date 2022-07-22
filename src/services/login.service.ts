import { IUserLogin } from '@interfaces'
import { encrypt } from '@helpers'
import { ApiResponseStatusEnum } from '@enums'
import { MOCKED_USER_LOGIN } from './login.mocked'

export class LoginService {
  doLogin(userLogin: IUserLogin) {
    if (
      userLogin.email === MOCKED_USER_LOGIN.email &&
      userLogin.password === MOCKED_USER_LOGIN.password
    )
      return {
        status: ApiResponseStatusEnum.SUCCESS,
        data: { token: encrypt(JSON.stringify(userLogin)) },
      }

    return {
      status: ApiResponseStatusEnum.SERVER_ERROR,
      data: { error: 'Email e/ou senha inválido(s).' },
    }
  }
}
