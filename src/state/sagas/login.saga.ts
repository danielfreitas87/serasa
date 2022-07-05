import { takeLatest, put } from 'redux-saga/effects'
import { AnyAction } from 'redux'
import { LoginService } from '@services'
import { DO_LOGIN, doLoginSuccess, doLoginFailure } from '@actions'
import { IApiResponse } from '@interfaces'
import { isApiResponseStatusOk } from '@helpers'

function* _doLogin({ payload }: AnyAction) {
  try {
    const loginService = new LoginService()
    const response: IApiResponse = yield loginService.doLogin(payload)
    if (isApiResponseStatusOk(response?.status)) {
      yield put(doLoginSuccess(response.data))
    } else {
      yield put(doLoginFailure())
    }
  } catch (error) {
    yield put(doLoginFailure())
  }
}

export default function* loginSaga() {
  yield takeLatest(DO_LOGIN, _doLogin)
}
