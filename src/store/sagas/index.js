import { all, fork } from 'redux-saga/effects'
import visitor from './visitor'
import session from './session'
import uploading from './uploading'

const rootSaga = function* root() {
  yield all([fork(visitor), fork(session), fork(uploading)])
}

export default rootSaga