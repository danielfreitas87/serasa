import { IUserLogin } from '@interfaces'
import { encrypt } from '@helpers'
import BaseService from './base.service'
import { ApiResponseStatusEnum, PathAliasEnum } from '@enums'

const mockedLogin = {
  email: 'teste@serasa.com',
  password: 'serasa@123',
}

export class LoginService extends BaseService {
  constructor() {
    super(PathAliasEnum.LOGIN)
  }

  doLogin(userLogin: IUserLogin) {
    if (
      userLogin.email === mockedLogin.email &&
      userLogin.password === mockedLogin.password
    )
      return {
        status: ApiResponseStatusEnum.SUCCESS,
        data: { token: encrypt(JSON.stringify(userLogin)) },
      }

    return {
      status: ApiResponseStatusEnum.SERVER_ERROR,
      data: { message: 'Email ou senha inválido(s).' },
    }

    // return super.post(userLogin)
  }
}
