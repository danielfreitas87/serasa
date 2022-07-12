import { takeLatest, put } from 'redux-saga/effects'
import { AnyAction } from 'redux'
import { AddressService } from '@services'
import {
  fetchCitiesSuccess,
  fetchCitiesFailure,
  fetchUFsSuccess,
  fetchUFsFailure,
  FETCH_UFS,
  FETCH_CITIES,
} from '@actions'
import { IUFsResponse, ICitiesResponse } from '@interfaces'

function* _fetchUFs() {
  try {
    const addressService = new AddressService()
    const response: IUFsResponse = yield addressService.fetchUFs()
    if (response.data) {
      yield put(fetchUFsSuccess(response.data))
    } else {
      yield put(fetchUFsFailure())
    }
  } catch (error) {
    yield put(fetchUFsFailure())
  }
}

function* _fetchCities({ payload }: AnyAction) {
  try {
    const addressService = new AddressService()
    const response: ICitiesResponse = yield addressService.fetchCities(payload)
    if (response.data) {
      const cities = response.data
        .map((city) => city.nome)
        .sort()
        .map((city) => ({ label: city, value: city }))
      yield put(fetchCitiesSuccess(cities))
    } else {
      yield put(fetchCitiesFailure())
    }
  } catch (error) {
    yield put(fetchCitiesFailure())
  }
}

export default function* loginSaga() {
  yield takeLatest(FETCH_UFS, _fetchUFs)
  yield takeLatest(FETCH_CITIES, _fetchCities)
}
