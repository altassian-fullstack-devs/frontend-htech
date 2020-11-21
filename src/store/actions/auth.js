import { createAsyncAction } from 'store/utils'
import apiCall from 'services/api'

export const AUTHENTICATE = createAsyncAction('auth/AUTHENTICATE')
export const CONFIRM_EMAIL = createAsyncAction('auth/CONFIRM_EMAIL')
export const RESET_PASSWORD = createAsyncAction('auth/RESET_PASSWORD')
export const CHANGE_PASSWORD = createAsyncAction('auth/CHANGE_PASSWORD')

export const signIn = (email, password) =>
  apiCall({
    method: 'POST',
    endpoint: '/auth/login',
    query: {
      email,
      password,
    },
    types: AUTHENTICATE,
    needsNormalization: false
  })

export const authCheck = () => (dispatch, getState) =>
  apiCall({
    method: 'GET',
    endpoint: '/auth/check',
    query: {},
    types: AUTHENTICATE,
    needsNormalization: false
  })(dispatch, getState)