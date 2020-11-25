import merge from "lodash/merge";

import { createAsyncAction } from "store/utils";
import { ENDPOINT } from 'constants/app'
import apiCall from 'services/api'

export const LOAD_HISTORIES = createAsyncAction('developer/histories/LOAD')
export const CREATE_HISTORY = createAsyncAction('developer/histories/CREATE')
export const UPDATE_HISTORY = createAsyncAction('developer/histories/UPDATE')

export const loadHistories = ({
  number = 1,
  size = 10,
  sort,
  filters,
} = {}, ownerId = null) => (dispatch, getState) => {
  let params = {
    page: {
      number,
      size,
    },
    sort,
    filter: filters
  }

  ownerId && merge(params, { ownerId })

  return apiCall({
    method: 'POST',
    endpoint: ENDPOINT.LOAD_PORTFOLIOS,
    types: LOAD_HISTORIES,
    query: params
  })(dispatch, getState)
}

export const updateHistory = (data, id, ownerId = null) => {
  let query = { data, id }
  ownerId && merge(query, { ownerId })

  return apiCall({
    method: 'PUT',
    endpoint: ENDPOINT.UPDATE_PORTFOLIO,
    types: UPDATE_HISTORY,
    query
  })
}

export const createHistory = (data, ownerId = null) => {
  let query = { data }
  ownerId && merge(query, { ownerId })
  
  return apiCall({
    method: 'POST',
    endpoint: ENDPOINT.CREATE_PORTFOLIO,
    type: CREATE_HISTORY,
    query
  })
}