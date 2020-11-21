import { LOCATION_CHANGE } from 'connected-react-router'
import get from 'lodash/get'

import { createReducer } from 'store/utils'
import { LOAD_VISITOR, LOG_OUT } from 'store/actions/visitor'

const initialState = {
  id: null,
  email: null,
  username: null,
  name: null,
  photo: null,
  birthday: null,
  register_date: null,
  duty_id: null,
  bio: null,
  category_id: null,
  facebook_link: null,
  linkedin_link: null,
  twitter_link: null,
  is_active: null,
  error: null,
  isLoading: false,
  isLoaded: false,
}

const loadVisitor = (state, { payload }) => 
  state.merge({
    id: get(payload, 'data.id', null),
    email: get(payload, 'data.email', null),
    username: get(payload, 'data.username', null),
    name: get(payload, 'data.name', null),
    photo: get(payload, 'data.photo', null),
    birthday: get(payload, 'data.birthday', null),
    register_date: get(payload, 'data.register_date', null),
    duty_id: get(payload, 'data.duty_id', null),
    bio: get(payload, 'data.bio', null),
    category_id: get(payload, 'data.category_id', null),
    facebook_link: get(payload, 'data.facebook_link', null),
    linkedin_link: get(payload, 'data.linkedin_link', null),
    twitter_link: get(payload, 'data.twitter_link', null),
    is_active: get(payload, 'data.is_active', null),
    isLoaded: true,
  })

const handlers = {
  [LOAD_VISITOR.SUCCESS]: loadVisitor,

  [LOCATION_CHANGE]: state => state.merge({ error: false }),

  [LOG_OUT]: state => state.merge(initialState),
}

export default createReducer(initialState, handlers)