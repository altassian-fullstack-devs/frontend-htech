import { combineReducers } from 'redux'

import certificate from './certificate'
import education from './education'
import history from './history'
import portfolio from './portfolio'
import profile from './profile'

export default combineReducers({
  certificate,
  education,
  history,
  portfolio,
  profile
})
