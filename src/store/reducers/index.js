import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import app from './app'
import auth from './auth'
import developer from './developer'
import data from './data'
import accounts from './accounts'
import persist from './persist'

export default history => 
  combineReducers({
    app,
    auth,
    data,
    developer,
    accounts,
    persist,
    router: connectRouter(history)
  })