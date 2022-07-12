import { DefaultOptionType } from 'antd/lib/select'

const prefix = 'ADDRESS'
const FETCH_UFS = `${prefix}.FETCH_UFS`
const FETCH_UFS_SUCCESS = `${prefix}.FETCH_UFS_SUCCESS`
const FETCH_UFS_FAILURE = `${prefix}.FETCH_UFS_FAILURE`
const FETCH_CITIES = `${prefix}.FETCH_CITIES`
const FETCH_CITIES_SUCCESS = `${prefix}.FETCH_CITIES_SUCCESS`
const FETCH_CITIES_FAILURE = `${prefix}.FETCH_CITIES_FAILURE`

const fetchUFs = () => ({
  type: FETCH_UFS,
})

const fetchUFsSuccess = (payload: Array<string>) => ({
  type: FETCH_UFS_SUCCESS,
  payload,
})

const fetchUFsFailure = () => ({
  type: FETCH_UFS_FAILURE,
})

const fetchCities = (payload: string) => ({
  type: FETCH_CITIES,
  payload,
})

const fetchCitiesSuccess = (payload: Array<DefaultOptionType>) => ({
  type: FETCH_CITIES_SUCCESS,
  payload,
})

const fetchCitiesFailure = () => ({
  type: FETCH_CITIES_FAILURE,
})

export {
  FETCH_UFS,
  FETCH_UFS_SUCCESS,
  FETCH_UFS_FAILURE,
  FETCH_CITIES,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_FAILURE,
  fetchUFs,
  fetchUFsSuccess,
  fetchUFsFailure,
  fetchCities,
  fetchCitiesSuccess,
  fetchCitiesFailure,
}
