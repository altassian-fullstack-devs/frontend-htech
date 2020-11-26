export const API = {
  URL: "http://192.168.100.175:8000",
}

export const ENDPOINT = {
  SIGN_IN: '/api/auth/signin',
  SIGN_UP: '/api/auth/signup',
  SIGN_IN_BY_TOKEN: '/api/auth/tokens',

  LOAD_ACCOUNT: '/api/accounts',
  LOAD_PROFILE: '/api/profiles',
  UPDATE_PROFILE: '/api/profiles/update',
  CREATE_PROFILE: '/api/profiles/create',
  DEACTIVATE_PROFILE: '/api/profiles/deactivate',

  LOAD_HISTORIES: '/api/histories',
  UPDATE_HISTORY: '/api/histories/update',
  CREATE_HISTORY: '/api/histories/create',

  LOAD_PORTFOLIOS: '/api/portfolios',
  UPDATE_PORTFOLIO: '/api/portfolios/update',
  CREATE_PORTFOLIO: '/api/portfolios/create'
}