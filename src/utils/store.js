import get from 'lodash/get'
import head from 'lodash/head'
import uniq from 'lodash/uniq'
import set from 'lodash/set'
import map from 'lodash/map'
import Immutable from 'seamless-immutable'
import { createSelector } from 'reselect'
import isArray from 'lodash/isArray'
import isEmpty from 'lodash/isEmpty'
import includes from 'lodash/includes'

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)
const objectSpread = function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { set(target, key, source[key]); }); } return target; }


export const createReducer = (initialState, handlers) => (
  state = Immutable(initialState),
  action,
) => (handlers[action.type] ? handlers[action.type](state, action) : state)

export const createAsyncAction = type => ({
  REQUEST: `${type}.REQUEST`,
  SUCCESS: `${type}.SUCCESS`,
  FAILURE: `${type}.FAILURE`,
})

export const createFields = (type, field, singular = false) => {
  const entity = field || type
  var addKey = !field || field === type ? '' : capitalizeFirstLetter(field)
  return {
    [entity]: singular ? null : [],
    ['isLoading'.concat(addKey)]: false,
    ['isLoaded'.concat(addKey)]: false
  }
}

export const getEntities = (getState, getData, handlerOptions) => {
  const type = get(handlerOptions, 'type')
  const field = get(handlerOptions, 'field')
  const singular = get(handlerOptions, 'singular', false)

  return createSelector(getState, getData, (state, data) => {
    const entity = field || type
    const addKey = !field || field === type ? '' : capitalizeFirstLetter(field)
    
    let all = {
      isLoading: state['isLoading'.concat(addKey)],
      isLoaded: state['isLoaded'.concat(addKey)],
    }

    const ids = state[entity]
    var entityKey = singular ? 'entity' : 'entities'

    if (!isEmpty(ids)) {
      all[entityKey] = extractEntities(data, type, ids, singular)
    } else {
      all[entityKey] = singular ? {} : []
    }

    return all
  })
}

export const createReducerHandlers = (type, actionTypes, handlerOptions = {}) => {
  const field = handlerOptions['mapToKey']
  const singular = handlerOptions['singular']
  const withReplace = handlerOptions['withReplace']
  const addToState = handlerOptions['addToState']
  const addKey = !field || field === type ? '' : capitalizeFirstLetter(field)
  return {
    [actionTypes.REQUEST]: state => state.merge({
      ['isLoading'.concat(addKey)]: true,
      ['isLoaded'.concat(addKey)]: false,
    }),
    [actionTypes.FAILURE]: state => state.merge({
      ['isLoading'.concat(addKey)]: false,
      ['isLoaded'.concat(addKey)]: false
    }),
    [actionTypes.SUCCESS]: (state, action) => {
      let nextState = {
        ['isLoaded'.concat(addKey)]: true,
        ['isLoading'.concat(addKey)]: false
      }

      const data = get(action, 'payload.data.'.concat(type))
      const payloadResource = isArray(data) ? map(data, 'id') : [(data.id || data)]
      const mappedResourceType = field || type
      
      if (singular) {
        set(nextState, mappedResourceType, head(payloadResource))
      } else {
        set(nextState, mappedResourceType, withReplace ? payloadResource : uniq([...get(state, mappedResourceType, [])], [...payloadResource]))
      }
      return state.merge(objectSpread({}, nextState, addToState))
    }
  }
}

export const extractEntities = (data, type, id, singular = false) => {
  let entities = get(data, type, [])
  !isArray(entities) && (entities = [entities])
  var ids = isArray(id) ? map(id, i => i.id || i) : [id]
  entities = entities.filter(entity => includes(ids, entity.id))
  if (singular)
    return head(entities)
  return entities
}