import { all, put, take, fork } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { ROOT_PATH } from 'constants/paths'
import { LOG_OUT } from 'store/actions/visitor'
import { AUTHENTICATE } from 'store/actions/auth'
import { LOAD_PROFILE, UPDATE_PROFILE } from 'store/actions/developer/profile'
import { loadHistories, UPDATE_HISTORY } from 'store/actions/developer/history'
import { loadPortfolios, UPDATE_PORTFOLIO } from 'store/actions/developer/portfolio'

function* watchAuthentication() {
  yield take(AUTHENTICATE.SUCCESS)
  yield put(push(ROOT_PATH))
}

function* redirectLogOut() {
  while (true) {
    yield take(LOG_OUT)
    yield put(push(ROOT_PATH))
  }
}

// function* fetchProfile() {
//   while (true) {
//     yield take(LOAD_PROFILE.SUCCESS)
//     yield all([
//       put(loadHistories()),
//       put(loadPortfolios()),
//       put(loadEducations()),
//       put(loadCertificates())
//     ])
//   }
// }

// function* watchProfileUpdate() {
//   while (true) {
//     const { profile, history, portfolio, education, certificate } = yield race({
//       profile: take(UPDATE_PROFILE.SUCCESS),
//       history: take(UPDATE_HISTORY.SUCCESS),
//       portfolio: take(UPDATE_PORTFOLIO.SUCCESS),
//       education: take(UPDATE_EDUCATION.SUCCESS),
//       certificate: take(UPDATE_CERTIFICATE.SUCCESS)
//     })

//     profile && (yield put(loadProfile()))
//     history && (yield put(loadHistories()))
//     portfolio && (yield put(loadPortfolios()))
//     education && (yield put(loadEducations()))
//     certificate && (yield put(loadCertificates()))
//   }
// }

// function* watchProfileCreate() {
//   while (true) {
//     const { profile, history, portfolio, education, certificate } = yield race({
//       history: take(CREATE_HISTORY.SUCCESS),
//       portfolio: take(CREATE_PORTFOLIO.SUCCESS),
//       education: take(CREATE_EDUCATION.SUCCESS),
//       certificate: take(CREATE_CERTIFICATE.SUCCESS)
//     })

//     history && (yield put(loadHistories()))
//     portfolio && (yield put(loadPortfolios()))
//     education && (yield put(loadEducations()))
//     certificate && (yield put(loadCertificates()))
//   }
// }

export default function* root() {
  yield all([
    fork(watchAuthentication),
    fork(redirectLogOut),
    // fork(fetchProfile),
    // fork(watchProfileCreate),
    // fork(watchProfileUpdate)
  ])
}