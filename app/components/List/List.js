import React, { Component, PropTypes } from 'react'

import ItemCard from '../ItemCard/ItemCard'

import style from './List.scss'

class List extends Component {
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    material: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })).isRequired,
  cart: PropTypes.object,
  onAdd: PropTypes.func,
}

export default List