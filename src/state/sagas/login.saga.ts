import { takeLatest, put, call } from 'redux-saga/effects'
import { AnyAction } from 'redux'
import { LoginService } from '@services'
import { DO_LOGIN, doLoginSuccess, doLoginFailure } from '@actions'
import { IApiResponseLogin } from '@interfaces'
import { isApiResponseStatusOk } from '@helpers'

const delay = () => new Promise((res) => setTimeout(res, 10000))

function* _doLogin({ payload }: AnyAction) {
  try {
    const loginService = new LoginService()
    const response: IApiResponseLogin = yield loginService.doLogin(payload)
    if (isApiResponseStatusOk(response?.status)) {
      yield call(delay)
      yield put(doLoginSuccess(response?.data?.token))
    } else {
      yield put(doLoginFailure(response?.data?.error))
    }
  } catch (error) {
    yield put(doLoginFailure())
  }
}

export default function* loginSaga() {
  yield takeLatest(DO_LOGIN, _doLogin)
}
