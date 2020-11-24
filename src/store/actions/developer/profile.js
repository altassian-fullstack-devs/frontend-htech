import merge from "lodash/merge";

import { createAsyncAction } from "store/utils";
import { ENDPOINT } from 'constants/app'
import apiCall from 'services/api'

export const LOAD_PROFILES        = createAsyncAction('developer/profiles/LOAD')
export const LOAD_PROFILE         = createAsyncAction('developer/profiles/LOAD_ONE')
export const CREATE_PROFILE       = createAsyncAction('developer/profiles/CREATE')
export const UPDATE_PROFILE       = createAsyncAction('developer/profiles/UPDATE')

export const loadProfiles = ({
  paged = true,
  number = 1,
  size = 10,
  sort,
  filters
} = {}) => (dispatch, getState) => {
}

export const loadProfile = (pid = null) => {
  let query = {}
  pid && merge(query, { pid })
  return apiCall({
    method: 'GET',
    endpoint: ENDPOINT.LOAD_PROFILE,
    types: LOAD_PROFILE,
    query
  })
}

const updateProfile = (data, pid) => {
  const query = pid ? merge({}, data, { pid }) : data

  return apiCall({
    method: 'PUT',
    endpoint: ENDPOINT.UPDATE_PROFILE,
    types: UPDATE_PROFILE,
    query
  })
}

export const updateHourlyRate = (value, pid = null) => updateProfile({ hourlyRate: value }, pid)

export const updateOverview = (value, pid = null) => updateProfile({ overView: value }, pid)

export const updateSkills = (value, pid = null) => updateProfile({ skills: value }, pid)

export const updateTitle = (value, pid = null) => updateProfile({ title: value }, pid)

export const createProfile = (value, pid = null) => {
  let query = { data: value }
   
  return apiCall({
    method: 'POST',
    endpoint: ENDPOINT.CREATE_PROFILE,
    types: CREATE_PROFILE,
    query
  })
}