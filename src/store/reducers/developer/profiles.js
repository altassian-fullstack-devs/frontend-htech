import { LOAD_PROFILE } from "store/actions/developer/profiles"
import { createFields, createReducerHandlers, createReducer } from "store/utils"

const initialState = {
  ...createFields('profiles'),
  ...createFields('profiles', 'current', true),
  defaultSize: 10
}

const handlers = {
  ...createReducerHandlers('profiles', LOAD_PROFILE, {
    withReplace: true,
    mapToKey: 'current',
    singular: true
  }),
}

export default createReducer(initialState, handlers)