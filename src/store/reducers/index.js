import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import app from './app'
import auth from './auth'
import visitor from './visitor'
import developer from './developer'
import data from './data'

export default history => 
  combineReducers({
    app,
    auth,
    data,
    visitor,
    developer,
    router: connectRouter(history)
  })