import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { List, ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'

import MoneyIcon from 'material-ui/svg-icons/editor/attach-money'
import DeleteIcon from 'material-ui/svg-icons/action/delete'

import { formatPrice } from '../../utils'

import { removeFromCart } from '../../actions'

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
    <div>
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
                secondaryText={`${amount} x ${formatPrice(price)}`}
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
