import { createAsyncAction } from 'store/utils'

import apiCall from 'services/api'
import { ENDPOINT } from 'constants/app'

export const LOAD_VISITOR = createAsyncAction('visitor/LOAD')
export const LOG_OUT = 'visitor/LOG_OUT'

export const loadVisitor = () => 
  apiCall({
    endpoint: ENDPOINT.FETCH_PROFILE,
    query: {},
    types: LOAD_VISITOR,
  })

export const logOut = () => ({
  type: LOG_OUT
})