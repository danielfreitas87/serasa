import { combineReducers } from 'redux'
import login, { loginInitialState } from './login.reducer'

export { login, loginInitialState }

export default combineReducers({
  login,
})
