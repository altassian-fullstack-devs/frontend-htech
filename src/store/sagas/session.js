import { all, fork, put, take, race } from 'redux-saga/effects'
import { AUTHENTICATE } from 'store/actions/auth'
import { logOut, loadVisitor, LOAD_MY_ACCOUNT } from 'store/actions/accounts'
import { appReady } from 'store/actions/app'

function* session() {
  while (true) {
    yield take(AUTHENTICATE.SUCCESS)

    yield put(loadVisitor())

    const { success } = yield race({
      success: take(LOAD_MY_ACCOUNT.SUCCESS),
      failure: take(LOAD_MY_ACCOUNT.FAILURE),
    })

    if (!success) {
      yield put(logOut())
    } else {
      yield put(appReady())
    }
  }
}

export default function* root() {
  yield all([fork(session)])
}
