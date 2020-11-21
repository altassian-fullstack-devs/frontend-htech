import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import app from './app'
import auth from './auth'
import visitor from './visitor'

export default history => 
  combineReducers({
    app,
    auth,
    visitor,
    router: connectRouter(history)
  })