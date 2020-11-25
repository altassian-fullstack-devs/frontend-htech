import { createSelector } from 'reselect'
import { extractEntities } from 'store/utils'
import { getData } from './data'

export const getState = state => state.accounts

export const getVisitorId = createSelector(
  getState,
  state => state.me.id
)

export const getVisitorName = createSelector(
  getState,
  state => state.me.name
)

export const getVisitorPhoto = createSelector(
  getState,
  state => state.me.photo
)

export const getVisitorRole = createSelector(
  getState,
  state => state.me.role
)

export const getVisitor = createSelector(
  getData,
  getVisitorId,
  (data, id) => extractEntities(data, 'accounts', id, true)
)

export const getSelectedUserId = createSelector(
  getState,
  state => state.selected
)
export const getSelectedUser = createSelector(
  getData,
  getSelectedUserId,
  (data, id) => extractEntities(data, 'accounts', id, true)
)