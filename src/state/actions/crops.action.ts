const prefix = 'CROPS'
const FETCH_CROPS = `${prefix}.FETCH_CROPS`
const FETCH_CROPS_SUCCESS = `${prefix}.FETCH_CROPS_SUCCESS`
const FETCH_CROPS_FAILURE = `${prefix}.FETCH_CROPS_FAILURE`

const fetchCrops = () => ({
  type: FETCH_CROPS,
})

const fetchCropsSuccess = (payload: Array<string>) => ({
  type: FETCH_CROPS_SUCCESS,
  payload,
})

const fetchCropsFailure = () => ({
  type: FETCH_CROPS_FAILURE,
})

export {
  FETCH_CROPS,
  FETCH_CROPS_SUCCESS,
  FETCH_CROPS_FAILURE,
  fetchCrops,
  fetchCropsSuccess,
  fetchCropsFailure,
}
