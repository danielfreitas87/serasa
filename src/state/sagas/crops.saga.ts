import { takeLatest, put } from 'redux-saga/effects'
import { CropsService } from '@services'
import { FETCH_CROPS, fetchCropsSuccess, fetchCropsFailure } from '@actions'

function* _fetchCrops() {
  try {
    const cropsService = new CropsService()
    const response: Array<string> = yield cropsService.fetchCrops()
    if (response.length) {
      yield put(fetchCropsSuccess(response))
    } else {
      yield put(fetchCropsFailure())
    }
  } catch (error) {
    yield put(fetchCropsFailure())
  }
}

export default function* cropsSaga() {
  yield takeLatest(FETCH_CROPS, _fetchCrops)
}
