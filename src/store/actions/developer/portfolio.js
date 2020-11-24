import merge from "lodash/merge";

import { createAsyncAction } from "store/utils";
import { ENDPOINT } from 'constants/app'
import apiCall from 'services/api'

export const LOAD_PORTFOLIOS = createAsyncAction('developer/portfolios/LOAD')
export const CREATE_PORTFOLIO = createAsyncAction('developer/portfolios/CREATE')
export const UPDATE_PORTFOLIO = createAsyncAction('developer/portfolios/UPDATE')

export const loadPortfolios = ({
  paged = true,
  number = 1,
  size = 10,
  sort,
  filters
} = {}) => (dispatch, getState) => {
}

export const updatePortfolio = (data, id, pid = null) => {
  let query = { data, id }
  pid && merge(query, { pid })

  return apiCall({
    method: 'PUT',
    endpoint: ENDPOINT.UPDATE_PORTFOLIO,
    types: UPDATE_PORTFOLIO,
    query
  })
}

export const createPortfolio = (data, pid = null) => {
  let query = { data }
  pid && merge(query, { pid })
  
  return apiCall({
    method: 'POST',
    endpoint: ENDPOINT.CREATE_PORTFOLIO,
    type: CREATE_PORTFOLIO,
    query
  })
}