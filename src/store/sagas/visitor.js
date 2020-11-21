import { all, put, take, fork } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { ROOT_PATH } from 'constants/paths'
import { LOAD_VISITOR, LOG_OUT } from 'store/actions/visitor'
import { AUTHENTICATE } from 'store/actions/auth'
import watchFileUploading from './uploading'
import { APP_READY } from 'store/actions/app'

function* watchAuthentication() {
  yield take(AUTHENTICATE.SUCCESS)
  yield put(push(ROOT_PATH))
}

function* runAfterLoadVisitor() {
  yield take(LOAD_VISITOR.SUCCESS)
  yield take(APP_READY)

  yield all([fork(watchFileUploading)])
}

function* redirectLogOut() {
  while (true) {
    yield take(LOG_OUT)
    yield put(push(ROOT_PATH))
  }
}

export default function* root() {
  yield all([
    fork(watchAuthentication),
    fork(runAfterLoadVisitor),
    fork(redirectLogOut),
  ])
}
