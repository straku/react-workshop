import React, { Component, PropTypes } from 'react'

import ItemCard from '../ItemCard/ItemCard'

import style from './List.scss'

class List extends Component {
  render () {
    const { items, onAdd } = this.props
    return (
      <div className={style.list}>
        {
          items.map((item, i) => (
            <ItemCard
              key={i}
              item={item}
              onClick={onAdd}
            />
          ))
        }
      </div>
    )
  }
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    material: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })).isRequired,
  onAdd: PropTypes.func,
}

export default List