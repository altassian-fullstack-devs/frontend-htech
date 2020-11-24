import { createSelector } from 'reselect'
import { extractEntities } from 'store/utils'
import { getData } from './data'

export const getState = state => state.visitor

export const getVisitorId = createSelector(
  getState,
  state => state.id
)

export const getVisitorName = createSelector(
  getState,
  state => state.name
)

export const getVisitorPhoto = createSelector(
  getState,
  state => state.photo
)

export const getVisitorRole = createSelector(
  getState,
  state => state.role
)

export const getVisitor = createSelector(
  getData,
  getVisitorId,
  (data, id) => extractEntities(data, 'account', id, true)
)