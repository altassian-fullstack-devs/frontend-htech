import { createReducer } from "store/utils"

import pick from "lodash/pick"
import { AUTHENTICATE } from "store/actions/auth"
import { LOG_OUT } from "store/actions/accounts"

const initialState = {
  access: null,
}

const handlers = {
  [AUTHENTICATE.SUCCESS]: (state, { payload }) => state.merge({
    access: pick(payload.data, ['access_token', 'token_type', 'expires_at']),
  }),
  [LOG_OUT]: state => state.merge({
    access: null
  }),
}

export default createReducer(initialState, handlers)