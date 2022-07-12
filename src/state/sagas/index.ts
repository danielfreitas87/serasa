import { all, fork } from 'redux-saga/effects'
import addressSaga from './address.saga'
import cropsSaga from './crops.saga'
import loginSaga from './login.saga'
import producerSaga from './producer.saga'

export default function* rootSaga() {
  yield all([
    fork(addressSaga),
    fork(cropsSaga),
    fork(loginSaga),
    fork(producerSaga),
  ])
}
