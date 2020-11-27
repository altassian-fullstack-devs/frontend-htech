import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import app from './app'
import auth from './auth'
import developer from './developer'
import data from './data'
import accounts from './accounts'
import persist from './persist'
import ui from './ui'

export default history => 
  combineReducers({
    app,
    auth,
    data,
    developer,
    accounts,
    persist,
    ui,
    router: connectRouter(history)
  })