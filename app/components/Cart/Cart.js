import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { List, ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'

import MoneyIcon from 'material-ui/svg-icons/editor/attach-money'
import DeleteIcon from 'material-ui/svg-icons/action/delete'

import { formatPrice } from '../../utils'

import { removeFromCart } from '../../actions'

import style from './Cart.scss'

function Cart ({ items, amounts, dispatch }) {
  const getSum = () => {
    let sum = 0
    items.forEach(item => {
      const { id, price } = item
      sum += (amounts[id] || 0) * price
    })
    return formatPrice(sum)
  }

  return (
    <div className={style.list}>
      <List>
        <ListItem primaryText={`Cart value: ${getSum()}`} leftIcon={<MoneyIcon />} />
      </List>
      <Divider />
      <List>
        {
          items.map((item, i) => {
            const { id, name, price } = item
            const amount = amounts[id]
            if (!amount) return null
            return (
              <ListItem
                key={id}
                primaryText={name}
                secondaryText={`${amount} x ${formatPrice(item.price)}`}
                rightIcon={<DeleteIcon onClick={() => dispatch(removeFromCart(id))} />}
              />
            )
          })
        }
      </List>
    </div>
  )
}

Cart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  amounts: PropTypes.object
}

export default connect()(Cart)