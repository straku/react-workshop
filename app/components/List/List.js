import React, { PropTypes } from 'react'

import ItemCard from '../ItemCard/ItemCard'

import style from './List.scss'

function List ({ items, cart }) {
  return (
    <div className={style.list}>
      {
        items.map((item, i) => {
          return (
            <ItemCard
              {...item}
              key={item.id}
              amount={cart[item.id] || 0}
            />
          )
        })
      }
    </div>
  )
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    material: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })).isRequired,
  cart: PropTypes.object
}

export default List