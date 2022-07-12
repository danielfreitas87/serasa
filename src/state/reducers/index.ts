import { combineReducers } from 'redux'
import address from './address.reducer'
import crops from './crops.reducer'
import login from './login.reducer'
import producers from './producer.reducer'
import page from './page.reducer'

export const persistBlacklisted = ['address', 'producers', 'page']

export default combineReducers({
  address,
  crops,
  login,
  producers,
  page,
})
