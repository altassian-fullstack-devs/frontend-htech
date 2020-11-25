import merge from "lodash/merge";

import { createAsyncAction } from "store/utils";
import { ENDPOINT } from 'constants/app'
import apiCall from 'services/api'

export const LOAD_PROFILE         = createAsyncAction('developer/profiles/LOAD_ONE')
export const CREATE_PROFILE       = createAsyncAction('developer/profiles/CREATE')
export const UPDATE_PROFILE       = createAsyncAction('developer/profiles/UPDATE')

export const loadProfile = (ownerId = null) => apiCall({
  method: 'GET',
  endpoint: ENDPOINT.LOAD_PROFILE,
  types: LOAD_PROFILE,
  query: ownerId ? { ownerId } : {}
})

const updateProfile = (data, ownerId) => apiCall({
  method: 'PUT',
  endpoint: ENDPOINT.UPDATE_PROFILE,
  types: UPDATE_PROFILE,
  query: ownerId ? merge({}, data, { ownerId }) : data
})

export const updateHourlyRate = (value, ownerId = null) => updateProfile({ hourlyRate: value }, ownerId)

export const updateOverview = (value, ownerId = null) => updateProfile({ overView: value }, ownerId)

export const updateSkills = (value, ownerId = null) => updateProfile({ skills: value }, ownerId)

export const updateTitle = (value, ownerId = null) => updateProfile({ title: value }, ownerId)

export const createProfile = (value, ownerId = null) => apiCall({
  method: 'POST',
  endpoint: ENDPOINT.CREATE_PROFILE,
  types: CREATE_PROFILE,
  query: { data: value }
})