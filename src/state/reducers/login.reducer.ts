import { AnyAction } from 'redux'
import { DO_LOGIN_FAILURE, DO_LOGIN_SUCCESS } from '@actions'
import { ILoginState } from '@interfaces'

export const loginInitialState: ILoginState = {
  token: '',
}

export default function loginReducer(
  state = loginInitialState,
  action: AnyAction,
) {
  switch (action.type) {
    case DO_LOGIN_SUCCESS:
      return { token: action.payload }
    case DO_LOGIN_FAILURE:
      return loginInitialState
    default:
      return state
  }
}
