import { takeLatest, put } from 'redux-saga/effects'
import { CropsService } from '@services'
import { FETCH_CROPS, fetchCropsSuccess, fetchCropsFailure } from '@actions'
import { ICropsResponse } from '@interfaces'

function* _fetchCrops() {
  try {
    const cropsService = new CropsService()
    const response: ICropsResponse = yield cropsService.fetchCrops()
    if (response.data) {
      yield put(fetchCropsSuccess(response.data))
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
