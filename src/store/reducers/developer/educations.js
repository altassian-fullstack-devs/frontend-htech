const { LOAD_EDUCATIONS, CREATE_EDUCATION, UPDATE_EDUCATION } = require("store/actions/developer/educations")
const { createFields, createReducerHandlers, createReducer } = require("store/utils")

const initialState = {
  ...createFields('educations'),
  defaultSize: 10
}

const handlers = {
  ...createReducerHandlers('educations', LOAD_EDUCATIONS, {
    withReplace: true
  }),
}

export default createReducer(initialState, handlers)