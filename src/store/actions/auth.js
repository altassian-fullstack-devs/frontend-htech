import { createAsyncAction } from 'store/utils'
import apiCall from 'services/api'
import { ENDPOINT } from 'constants/app'

export const AUTHENTICATE = createAsyncAction('auth/AUTHENTICATE')
export const CONFIRM_EMAIL = createAsyncAction('auth/CONFIRM_EMAIL')
export const RESET_PASSWORD = createAsyncAction('auth/RESET_PASSWORD')
export const CHANGE_PASSWORD = createAsyncAction('auth/CHANGE_PASSWORD')

export const signIn = (email, password) =>
  apiCall({
    method: 'POST',
    endpoint: ENDPOINT.SIGN_IN,
    query: {
      email,
      password,
    },
    types: AUTHENTICATE,
    withoutPush: true
  })

export const signInByToken = token => apiCall({
  method: 'POST',
  endpoint: ENDPOINT.SIGN_IN_BY_TOKEN,
  query: {
    token
  },
  types: AUTHENTICATE,
  withoutPush: true
})