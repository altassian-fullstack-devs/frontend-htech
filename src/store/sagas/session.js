import { all, fork, put, take, race } from 'redux-saga/effects'
import { AUTHENTICATE } from 'store/actions/auth'
import { logOut, loadVisitor, LOAD_VISITOR } from 'store/actions/visitor'
import { appReady } from 'store/actions/app'

function* session() {
  while (true) {
    yield take(AUTHENTICATE.SUCCESS)

    yield put(loadVisitor())

    const { success } = yield race({
      success: take(LOAD_VISITOR.SUCCESS),
      failure: take(LOAD_VISITOR.FAILURE),
    })

    if (!success) {
      yield put(logOut())
    }
    
    yield put(appReady())
  }
}

export default function* root() {
  yield all([fork(session)])
}
