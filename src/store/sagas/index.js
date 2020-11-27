import { all, fork } from 'redux-saga/effects'
import auth from './auth'
import uploading from './uploading'
import ui from './ui'

const rootSaga = function* root() {
  yield all([
    fork(auth), 
    fork(uploading),
    fork(ui)
  ])
}

export default rootSaga