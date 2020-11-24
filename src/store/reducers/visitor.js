import { LOCATION_CHANGE } from 'connected-react-router'
import get from 'lodash/get'

import { createReducer, createReducerHandlers } from 'store/utils'
import { LOAD_VISITOR, LOG_OUT } from 'store/actions/visitor'

const initialState = {
  id: null,
  role: null,
  name: null,
  photo: null,
  error: null,
  isLoading: false,
  isLoaded: false,
}

const loadVisitor = (state, { payload }) => state.merge({
  id: get(payload, 'data.account.id', null),
  role: get(payload, 'data.account.role', null),
  name: get(payload, 'data.account.name', null),
  photo: get(payload, 'data.account.photo', null),
  isLoaded: true,
})
  

const handlers = {
  [LOAD_VISITOR.SUCCESS]: loadVisitor,

  [LOCATION_CHANGE]: state => state.merge({ error: false }),

  [LOG_OUT]: state => state.merge(initialState),
}

export default createReducer(initialState, handlers)