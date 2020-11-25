import { LOAD_PORTFOLIOS, CREATE_PORTFOLIO, UPDATE_PORTFOLIO } from "store/actions/developer/portfolios"
import { createFields, createReducerHandlers, createReducer } from "store/utils"

const initialState = {
  ...createFields('portfolios'),
  defaultSize: 10
}

const handlers = {
  ...createReducerHandlers('portfolios', LOAD_PORTFOLIOS, {
    withReplace: true
  }),
}

export default createReducer(initialState, handlers)