import merge from "lodash/merge";

import { createAsyncAction } from "store/utils";
import { ENDPOINT } from 'constants/app'
import apiCall from 'services/api'

export const LOAD_HISTORIES = createAsyncAction('developer/histories/LOAD')
export const CREATE_HISTORY = createAsyncAction('developer/histories/CREATE')
export const UPDATE_HISTORY = createAsyncAction('developer/histories/UPDATE')

export const loadHistories = ({
  paged = true,
  number = 1,
  size = 10,
  sort,
  filters
} = {}) => (dispatch, getState) => {
}

export const updateHistory = (data, id, ownerId = null) => {
  let query = { data, id }
  ownerId && merge(query, { ownerId })

  return apiCall({
    method: 'PUT',
    endpoint: ENDPOINT.UPDATE_HISTORY,
    types: UPDATE_HISTORY,
    query
  })
}

export const createHistory = (data, ownerId = null) => {
  let query = { data }
  ownerId && merge(query, { ownerId })
  
  return apiCall({
    method: 'POST',
    endpoint: ENDPOINT.CREATE_HISTORY,
    type: CREATE_HISTORY,
    query
  })
}