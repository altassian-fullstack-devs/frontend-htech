import { UPDATE_PORTFOLIO } from "store/actions/developer/portfolio"

export const API = {
  URL: "http://192.168.100.175:8000",
}

export const ENDPOINT = {
  SIGN_IN: '/auth/login',
  AUTH_CHECK: '/auth/check',

  FETCH_ACCOUNT: '/account',
  LOAD_PROFILE: '/profile',
  UPDATE_PROFILE: '/profile/update',
  CREATE_PROFILE: '/profile/create',
  DEACTIVATE_PROFILE: '/profile/deactivate',

  UPDATE_HISTORY: '/history/update',
  CREATE_HISTORY: '/history/create',

  UPDATE_PORTFOLIO: '/portfolio/update',
  CREATE_PORTFOLIO: '/portfolio/create'
}