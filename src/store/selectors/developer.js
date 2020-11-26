import get from 'lodash/get'
import { createSelector } from 'reselect'
import { getEntities } from 'store/utils'
import { getData } from '../data'

export const getState = state => state.developer

export const getProfile = getEntities(getState, getData, {
  type: 'profiles',
  field: 'selected',
  singular: true,
})

export const getProfileId = createSelector(getState, state => get(state, 'profiles.selected'))

export const getPortfolios = getEntities(getState, getData, {
  type: 'portfolios'
})

export const getHistories = getEntities(getState, getData, {
  type: 'histories',
})

export const getEducations = getEntities(getState, getData, {
  type: 'educations',
})

export const getCertificates = getEntities(getState, getData, {
  type: 'certificates'
})