import { LOCATION_CHANGE } from 'connected-react-router'

import { createFields, createReducer, createReducerHandlers } from 'utils/store'
import { LOAD_ACCOUNTS, LOAD_ACCOUNT, LOAD_MY_ACCOUNT, LOG_OUT } from 'store/actions/accounts'
import get from 'lodash/get'
import map from 'lodash/map'

const initialState = {
  ...createFields('accounts'),
  ...createFields('accounts', 'selected', true),
  ...createFields('accounts', 'me', true),
  total: 0
}

const handlers = {
  ...createReducerHandlers('accounts', LOAD_ACCOUNTS, {
    withReplace: true,
  }),
  ...createReducerHandlers('accounts', LOAD_ACCOUNT, {
    withReplace: true,
    mapTokey: 'selected',
    singular: true
  }),
  ...createReducerHandlers('accounts', LOAD_MY_ACCOUNT, {
    withReplace: true,
    mapTokey: 'me',
    singular: true
  }),
  [LOAD_ACCOUNTS.SUCCESS]: (state, action) => {
    const accounts = get(action, 'payload.data.accounts', [])
    const total = get(action, 'payload.data.meta.total', 0)
    return state.merge({
      accounts: map(accounts, 'id'),
      total
    })
  },
  [LOCATION_CHANGE]: state => state.merge({ error: false }),
  [LOG_OUT]: state => state.merge(initialState),
}

export default createReducer(initialState, handlers)