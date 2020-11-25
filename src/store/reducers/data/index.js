import get from 'lodash/get'
import pick from 'lodash/pick'
import mergeWith from 'lodash/mergeWith'
import isArray from 'lodash/isArray'

import { LOG_OUT } from 'store/actions/accounts'

import handlersReducer from './handlers'

const initialState = {
  withoutImmutable: true,
}

const excludedReducers = []

export default (state = initialState, action) => {
  const data = get(action, 'payload.data')
  const ok = get(action, 'ok', false)
  const withoutPush = get(action, 'withoutPush', false)

  if (action.type === LOG_OUT) {
    return mergeWith(
      pick(state, excludedReducers),
      initialState,
      (obj, src) => isArray(obj) ? src : undefined
    )
  }

  if (data && ok && !withoutPush) {
    const nextState = mergeWith(
      {},
      state,
      data,
      (obj, src) => isArray(obj) ? src : undefined
    )

    // Listen only for API success events
    return handlersReducer(nextState, action)
  }

  return state
}
