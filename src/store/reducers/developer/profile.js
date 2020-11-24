const { LOAD_PROFILES, LOAD_PROFILE, CREATE_PROFILE } = require("store/actions/developer/profile")
const { createFields, createReducerHandlers, createReducer } = require("store/utils")

const initialState = {
  ...createFields('profiles'),
  ...createFields('profiles', 'profile', true),
  defaultSize: 10
}

const handlers = {
  ...createReducerHandlers('profiles', LOAD_PROFILES, {
    withReplace: true
  }),
  ...createReducerHandlers('profiles', LOAD_PROFILE, {
    withReplace: true,
    mapToKey: 'profile',
    singular: true
  }),
  ...createReducerHandlers('profiles', CREATE_PROFILE, {
    mapToKey: 'profile',
    singular: true
  }),
  
}

export default createReducer(initialState, handlers)