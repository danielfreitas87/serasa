import { AnyAction } from 'redux'
import { FETCH_CROPS, FETCH_CROPS_SUCCESS, FETCH_CROPS_FAILURE } from '@actions'
import { ICropsState } from '@interfaces'

const CROPS_REDUCER_ERROR_MESSAGE =
  'Houve um erro ao acessar a plataforma. Tente novamente mais tarde!'

const cropsInitialState: ICropsState = {
  crops: null,
  loading: false,
  error: '',
}

export default function cropsReducer(
  state = cropsInitialState,
  action: AnyAction,
) {
  switch (action.type) {
    case FETCH_CROPS:
      return { ...state, loading: true }
    case FETCH_CROPS_SUCCESS:
      return { ...state, loading: false, crops: action.payload }
    case FETCH_CROPS_FAILURE:
      return {
        ...cropsInitialState,
        loading: false,
        error: CROPS_REDUCER_ERROR_MESSAGE,
      }
    default:
      return state
  }
}
