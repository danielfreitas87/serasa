import { AnyAction } from 'redux'
import {
  FETCH_CITIES,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_FAILURE,
  FETCH_UFS,
  FETCH_UFS_SUCCESS,
  FETCH_UFS_FAILURE,
} from '@actions'
import { IAddressState } from '@interfaces'

const ADDRESS_REDUCER_ERROR_MESSAGE =
  'Houve um erro ao acessar a plataforma. Tente novamente mais tarde!'

const addressInitialState: IAddressState = {
  cities: [],
  ufs: [],
  error: '',
  loading: false,
}

export default function loginReducer(
  state = addressInitialState,
  action: AnyAction,
) {
  switch (action.type) {
    case FETCH_UFS:
      return { ...state, loading: true }
    case FETCH_UFS_SUCCESS:
      return { ...state, loading: false, ufs: action.payload }
    case FETCH_UFS_FAILURE:
      return {
        ...addressInitialState,
        loading: false,
        error: ADDRESS_REDUCER_ERROR_MESSAGE,
      }
    case FETCH_CITIES:
      return { ...state, loading: true }
    case FETCH_CITIES_SUCCESS:
      return { ...state, loading: false, cities: action.payload }
    case FETCH_CITIES_FAILURE:
      return {
        ...addressInitialState,
        ufs: state.ufs,
        loading: false,
        error: ADDRESS_REDUCER_ERROR_MESSAGE,
      }
    default:
      return state
  }
}
