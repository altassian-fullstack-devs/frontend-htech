const { LOAD_CERTIFICATES, CREATE_CERTIFICATE, UPDATE_CERTIFICATE } = require("store/actions/developer/certificates")
const { createFields, createReducerHandlers, createReducer } = require("store/utils")

const initialState = {
  ...createFields('certificates'),
  defaultSize: 10
}

const handlers = {
  ...createReducerHandlers('certificates', LOAD_CERTIFICATES, {
    withReplace: true
  }),
}

export default createReducer(initialState, handlers)