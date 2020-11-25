import { all, put, take, fork, race } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { ROOT_PATH } from 'constants/paths'
import { LOG_OUT } from 'store/actions/accounts'
import { AUTHENTICATE } from 'store/actions/auth'
import { loadProfile, LOAD_PROFILE, UPDATE_PROFILE } from 'store/actions/developer/profiles'
import { loadHistories, UPDATE_HISTORY } from 'store/actions/developer/histories'
import { loadPortfolios, UPDATE_PORTFOLIO } from 'store/actions/developer/portfolios'

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

function* fetchProfile() {
  while (true) {
    const { meta: { ownerId }} = yield take(LOAD_PROFILE.SUCCESS)
    yield all([
      put(loadHistories(ownerId)),
      put(loadPortfolios(ownerId)),
      put(loadEducations(ownerId)),
      put(loadCertificates(ownerId))
    ])
  }
}

function* watchProfileUpdate() {
  while (true) {
    const { profile, history, portfolio, education, certificate } = yield race({
      profile: take(UPDATE_PROFILE.SUCCESS),
      history: take(UPDATE_HISTORY.SUCCESS),
      portfolio: take(UPDATE_PORTFOLIO.SUCCESS),
      education: take(UPDATE_EDUCATION.SUCCESS),
      certificate: take(UPDATE_CERTIFICATE.SUCCESS)
    })

    if (profile ) {
      const { meta: { ownerId } } = profile
      loadProfile(ownerId)
    }

    if (history) {
      const { meta: { ownerId } } = history
      loadHistories(ownerId)
    }

    if (portfolio) {
      const { meta: { ownerId } } = portfolio
      loadPortfolios(ownerId)
    }

    if (education) {
      const { meta: { ownerId } } = education
      loadEducations(ownerId)
    }

    if (certificate) {
      const { meta: { ownerId } } = certificate
      loadCertificates(ownerId)
    }
  }
}

function* watchProfileCreate() {
  while (true) {
    const { history, portfolio, education, certificate } = yield race({
      history: take(CREATE_HISTORY.SUCCESS),
      portfolio: take(CREATE_PORTFOLIO.SUCCESS),
      education: take(CREATE_EDUCATION.SUCCESS),
      certificate: take(CREATE_CERTIFICATE.SUCCESS)
    })

    if (history) {
      const { meta: { ownerId } } = history
      loadHistories(ownerId)
    }

    if (portfolio) {
      const { meta: { ownerId } } = portfolio
      loadPortfolios(ownerId)
    }

    if (education) {
      const { meta: { ownerId } } = education
      loadEducations(ownerId)
    }

    if (certificate) {
      const { meta: { ownerId } } = certificate
      loadCertificates(ownerId)
    }
  }
}

export default function* root() {
  yield all([
    fork(watchAuthentication),
    fork(redirectLogOut),
    fork(fetchProfile),
    fork(watchProfileCreate),
    fork(watchProfileUpdate)
  ])
}