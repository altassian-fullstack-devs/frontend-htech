import { all, fork, put, take, race } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { AUTHENTICATE, AUTO_AUTHENTICATE } from 'store/actions/auth'
import { logOut, loadVisitor, LOAD_MY_ACCOUNT, LOG_OUT } from 'store/actions/accounts'
import { appReady } from 'store/actions/app'

import { ROOT_PATH } from 'constants/paths'

function* auth() {
  while (true) {
    const { manual } = yield race({
      manual: take(AUTHENTICATE.SUCCESS),
      auto: take(AUTO_AUTHENTICATE.SUCCESS)
    })

    yield put(loadVisitor())

    const { success } = yield race({
      success: take(LOAD_MY_ACCOUNT.SUCCESS),
      failure: take(LOAD_MY_ACCOUNT.FAILURE),
    })

    if (!success) {
      yield put(logOut())
    } else {
      manual && (yield put(push(ROOT_PATH)))
      yield put(appReady())
    }
  }
}

function* redirectLogOut() {
  while (true) {
    yield take(LOG_OUT)
    yield put(push(ROOT_PATH))
  }
}

export default function* root() {
  yield all([
    fork(auth),
    fork(redirectLogOut)
  ])
}
