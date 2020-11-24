import { createSelector } from 'reselect'
import { getEntities } from 'store/utils'
import { getData } from '../data'

export const getState = state => state.developer

export const getProfiles = getEntities(getState, getData, {
  type: 'profiles'
})

export const getProfile = getEntities(getState, getData, {
  type: 'profiles',
  field: 'profile',
  singular: true,
})

export const getProfileId = createSelector(getState, state => state.profile)

export const getPortfolios = getEntities(getState, getData, {
  type: 'portfolios'
})

export const getPortfolio = getEntities(getState, getData, {
  type: 'portfolios',
  field: 'portfolio',
  singular: true
})

export const getPortfolioId = createSelector(getState, state => state.portfolio)

export const getHistories = getEntities(getState, getData, {
  type: 'histories',
})

export const getHistory = getEntities(getState, getData, {
  type: 'histories',
  field: 'history',
  singular: true
})

export const getHistoryId = createSelector(getState, state => state.history)

export const getEducations = getEntities(getState, getData, {
  type: 'educations',
})

export const getEducation = getEntities(getState, getData, {
  type: 'educations',
  field: 'education',
  singular: true
})

export const getEducationid = createSelector(getState, state => state.education)

export const getCertificates = getEntities(getState, getData, {
  type: 'certificates'
})

export const getCertificate = getEntities(getState, getData, {
  type: 'certificates',
  field: 'certifiate',
  singular: true
})

export const getCertificateid = createSelector(getState, state => state.certificate)