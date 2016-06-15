import React, { Component, PropTypes } from 'react'

import ItemCard from '../ItemCard/ItemCard'

import style from './List.scss'

class List extends Component {
  render () {
    const { items } = this.props
    return (
      <div className={style.list}>
        {items.map((item, i) => <ItemCard key={i} item={item} />)}
      </div>
    )
  }
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    material: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })).isRequired
}

export default List