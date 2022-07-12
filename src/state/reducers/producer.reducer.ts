import { AnyAction } from 'redux'
import {
  SAVE_PRODUCER,
  SAVE_PRODUCER_SUCCESS,
  SAVE_PRODUCER_FAILURE,
  FETCH_PRODUCERS,
  FETCH_PRODUCERS_SUCCESS,
  FETCH_PRODUCERS_FAILURE,
  REMOVE_PRODUCER,
  REMOVE_PRODUCER_SUCCESS,
  REMOVE_PRODUCER_FAILURE,
  SET_EDITING_PRODUCER,
} from '@actions'
import { IProducerState } from '@interfaces'

const PRODUCER_REDUCER_ERROR_MESSAGE =
  'Houve um erro ao acessar a plataforma. Tente novamente mais tarde!'

const producersInitialState: IProducerState = {
  producers: [],
  editingProducer: null,
  isEditing: false,
  error: '',
  loading: false,
}

export default function producersReducer(
  state = producersInitialState,
  action: AnyAction,
) {
  switch (action.type) {
    case FETCH_PRODUCERS:
      return { ...state, loading: true }
    case FETCH_PRODUCERS_SUCCESS:
      return { ...state, loading: false, producers: action.payload }
    case FETCH_PRODUCERS_FAILURE:
      return {
        ...producersInitialState,
        loading: false,
        error: PRODUCER_REDUCER_ERROR_MESSAGE,
      }
    case SAVE_PRODUCER:
      return { ...state, loading: true }
    case SAVE_PRODUCER_SUCCESS:
      return {
        ...state,
        loading: false,
        producers: action.payload,
      }
    case SAVE_PRODUCER_FAILURE:
      return {
        ...state,
        loading: false,
        error: PRODUCER_REDUCER_ERROR_MESSAGE,
      }
    case REMOVE_PRODUCER:
      return { ...state, loading: true }
    case REMOVE_PRODUCER_SUCCESS:
      return {
        ...state,
        loading: false,
        producers: action.payload,
      }
    case REMOVE_PRODUCER_FAILURE:
      return {
        ...producersInitialState,
        loading: false,
        error: PRODUCER_REDUCER_ERROR_MESSAGE,
      }
    case SET_EDITING_PRODUCER:
      return { ...state, editingProducer: action.payload }
    default:
      return state
  }
}
