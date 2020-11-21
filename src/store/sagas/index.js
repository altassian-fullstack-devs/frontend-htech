import { all, fork } from 'redux-saga/effects'
import visitor from './visitor'
import session from './session'

const rootSaga = function* root() {
  yield all([fork(visitor), fork(session)])
}

export default rootSaga