const { LOAD_PORTFOLIOS, CREATE_PORTFOLIO, UPDATE_PORTFOLIO } = require("store/actions/developer/portfolio")
const { createFields, createReducerHandlers, createReducer } = require("store/utils")

const initialState = {
  ...createFields('portfolios'),
  defaultSize: 10
}

const handlers = {
  ...createReducerHandlers('portfolios', LOAD_PORTFOLIOS, {
    withReplace: true
  }),
  ...createReducerHandlers('portfolios', CREATE_PORTFOLIO, {
    mapToKey: 'portfolio',
    singular: true
  }),
  
}

export default createReducer(initialState, handlers)