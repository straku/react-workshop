import { getAsync } from './api'

export const GET_LIST_REQUEST = 'GET_LIST_REQUEST'
export const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS'

export const ADD = 'ADD'
export const DELETE = 'DELETE'

function getListRequest () {
  return {
    type: GET_LIST_REQUEST
  }
}

function getListSuccess (list) {
  return {
    type: GET_LIST_SUCCESS,
    list
  }
}

export function getList () {
  return dispatch => {
    dispatch(getListRequest())
    getAsync(6)
      .then(list => dispatch(getListSuccess(list)))
  }
}

export function addToCart (id) {
  return {
    type: ADD,
    id
  }
}

export function removeFromCart (id) {
  return {
    type: DELETE,
    id
  }
}
