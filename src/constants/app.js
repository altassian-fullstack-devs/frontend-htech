export const API = {
  URL: "http://192.168.100.175:8000",
}

export const ENDPOINT = {
  SIGN_IN: '/auth/signin',
  SIGN_IN_BY_TOKEN: '/auth/tokens',

  LOAD_ACCOUNT: '/accounts',
  LOAD_PROFILE: '/profiles',
  UPDATE_PROFILE: '/profiles/update',
  CREATE_PROFILE: '/profiles/create',
  DEACTIVATE_PROFILE: '/profiles/deactivate',

  LOAD_HISTORIES: '/histories',
  UPDATE_HISTORY: '/histories/update',
  CREATE_HISTORY: '/histories/create',

  LOAD_PORTFOLIOS: '/portfolios',
  UPDATE_PORTFOLIO: '/portfolios/update',
  CREATE_PORTFOLIO: '/portfolios/create'
}