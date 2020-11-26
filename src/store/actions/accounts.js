import { createAsyncAction } from "store/utils";
import { ENDPOINT } from 'constants/app'
import apiCall from 'services/api'

export const LOAD_ACCOUNTS        = createAsyncAction('accounts/LOAD')
export const LOAD_ACCOUNT         = createAsyncAction('accounts/LOAD_ONE')
export const LOAD_MY_ACCOUNT      = createAsyncAction('accounts/LOAD/ME')

export const LOG_OUT              = 'visitor/LOG_OUT'

export const loadAccounts = ({
  number = 1,
  size = 10,
  sort,
  filters,
} = {}, role) => (dispatch, getState) => apiCall({
  method: 'POST',
  endpoint: ENDPOINT.LOAD_ACCOUNT,
  types: LOAD_ACCOUNTS,
  query: {
    page: {
      number,
      size,
    },
    sort,
    filter: filters,
    role
  }
})(dispatch, getState)

export const loadAccount = (id = null) => apiCall({
  method: 'POST',
  endpoint: ENDPOINT.LOAD_ACCOUNT,
  types: LOAD_ACCOUNT,
  query: id ? { id } : {}
})

export const loadVisitor = () => apiCall({
  method: 'POST',
  endpoint: ENDPOINT.LOAD_ACCOUNT,
  types: LOAD_MY_ACCOUNT,
  query: {}
})

export const logOut = () => ({
  type: LOG_OUT
})