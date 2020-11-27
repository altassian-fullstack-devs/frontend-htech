import get from 'lodash/get'
import { createSelector } from 'reselect'
import { extractEntities, getEntities } from 'utils/store'
import { getData } from './data'

export const getState = state => state.accounts

export const getVisitorId = createSelector(
  getState,
  state => state.me
)

export const getVisitor = createSelector(
  getData,
  getVisitorId,
  (data, id) => extractEntities(data, 'accounts', id, true)
)

export const getVisitorRole = createSelector(
  getVisitor,
  state => get(state, 'id')
)

export const getVisitorName = createSelector(
  getVisitor,
  state => get(state, 'name')
)

export const getVisitorPhoto = createSelector(
  getVisitor,
  state => get(state, 'photo')
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

export const getUserEntities = getEntities(getState, getData, {
  type: 'accounts'
})

export const getIsLoadingUsers = createSelector(
  getUserEntities,
  state => state.isLoading
)

export const getIsLoadedUsers = createSelector(
  getUserEntities,
  state => state.isLoaded
)

export const getUsers = createSelector(
  getUserEntities,
  state => get(state, 'entities', [])
)

export const getTotal = createSelector(
  getState,
  state => state.total
)