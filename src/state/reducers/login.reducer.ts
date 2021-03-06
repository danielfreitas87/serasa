import { AnyAction } from 'redux'
import {
  DO_LOGIN,
  DO_LOGOUT,
  DO_LOGIN_FAILURE,
  DO_LOGIN_SUCCESS,
} from '@actions'
import { ILoginState } from '@interfaces'

const LOGIN_REDUCER_ERROR_MESSAGE =
  'Houve um erro ao acessar a plataforma. Tente novamente mais tarde!'

const loginInitialState: ILoginState = {
  token: '',
  error: '',
  loading: false,
}

export default function loginReducer(
  state = loginInitialState,
  action: AnyAction,
) {
  switch (action.type) {
    case DO_LOGIN:
      return { ...state, loading: true }
    case DO_LOGOUT:
      return loginInitialState
    case DO_LOGIN_SUCCESS:
      return { ...state, loading: false, token: action.payload }
    case DO_LOGIN_FAILURE:
      return {
        ...loginInitialState,
        loading: false,
        error: action.payload || LOGIN_REDUCER_ERROR_MESSAGE,
      }
    default:
      return state
  }
}
