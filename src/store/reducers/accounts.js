import { LOCATION_CHANGE } from 'connected-react-router'
import get from 'lodash/get'

import { createFields, createReducer, createReducerHandlers } from 'store/utils'
import { LOAD_ACCOUNTS, LOAD_ACCOUNT, LOAD_MY_ACCOUNT, LOG_OUT } from 'store/actions/accounts'

const initialState = {
  ...createFields('accounts'),
  ...createFields('accounts', 'selected', true),
  me: {
    id: null,
    role: null,
    name: null,
    photo: null,
    error: null,
  },
  defaultSize: 10
}

const loadVisitor = (state, { payload }) => state.merge({
  me: {
    id: get(payload, 'data.accounts[0].id', null),
    role: get(payload, 'data.accounts[0].role', null),
    name: get(payload, 'data.accounts[0].name', null),
    photo: get(payload, 'data.accounts[0].photo', null),
  },
  isLoading: false,
  isLoaded: false,
})

const handlers = {
  ...createReducerHandlers('accounts', LOAD_ACCOUNTS, {
    withReplace: true,
  }),
  ...createReducerHandlers('accounts', LOAD_ACCOUNT, {
    withReplace: true,
    mapTokey: 'selected',
    singular: true
  }),
  [LOAD_MY_ACCOUNT.SUCCESS]: loadVisitor,
  [LOCATION_CHANGE]: state => state.merge({ error: false }),
  [LOG_OUT]: state => state.merge(initialState),
}

export default createReducer(initialState, handlers)