import { combineReducers } from 'redux'

import {
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
  ADD,
  DELETE
} from './actions'

const initialState = {
  list: {
    loader: true,
    data: []
  },
  cart: {}
}

function list (state = initialState.list, action) {
  switch (action.type) {
    case GET_LIST_REQUEST:
      return Object.assign({}, state, {
        loader: true
      })
    case GET_LIST_SUCCESS:
      return Object.assign({}, state, {
        loader: false,
        data: action.list
      })
    default: return state
  }
}

function cart (state = initialState.cart, action) {
  switch (action.type) {
    case ADD:
      return Object.assign({}, state, {
        [action.id]: state[action.id] ? state[action.id] + 1 : 1
      })
    case DELETE:
      return Object.assign({}, state, {
        [action.id]: 0
      })
    default: return state
  }
}

export default combineReducers({ list, cart })
