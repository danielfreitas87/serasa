import { takeLatest, put } from 'redux-saga/effects'
import { AnyAction } from 'redux'
import { LoginService } from '@services'
import { DO_LOGIN, DO_LOGOUT, doLoginSuccess, doLoginFailure } from '@actions'
import { ILoginResponse } from '@interfaces'
import { isApiResponseStatusOk } from '@helpers'

const delay = () => new Promise((res) => setTimeout(res, 1000))

const PERSIST_ROOT_STORAGE = 'persist:root'

function* _doLogin({ payload }: AnyAction) {
  try {
    const loginService = new LoginService()
    const response: ILoginResponse = yield loginService.doLogin(payload)
    if (isApiResponseStatusOk(response?.status)) {
      yield delay()
      yield put(doLoginSuccess(response?.data?.token))
    } else {
      yield put(doLoginFailure(response?.data?.error))
    }
  } catch (error) {
    yield put(doLoginFailure())
  }
}

function* _doLogout() {
  try {
    yield localStorage.removeItem(PERSIST_ROOT_STORAGE)
  } catch (error) {
    yield error
  }
}

export default function* loginSaga() {
  yield takeLatest(DO_LOGIN, _doLogin)
  yield takeLatest(DO_LOGOUT, _doLogout)
}
