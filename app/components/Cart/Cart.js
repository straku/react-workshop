import React, { Component, PropTypes } from 'react'

import { List, ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'

import MoneyIcon from 'material-ui/svg-icons/editor/attach-money'
import DeleteIcon from 'material-ui/svg-icons/action/delete'

import { formatPrice } from '../../utils'

import style from './Cart.scss'

class Cart extends Component {
  getSum () {
    const { items, amounts } = this.props
    let sum = 0
    items.forEach(item => {
      const { id, price } = item
      sum += (amounts[id] || 0) * price
    })
    return formatPrice(sum)
  }

  render () {
    const { items, amounts, onDelete } = this.props
    return (
      <div className={style.list}>
        <List>
          <ListItem primaryText={`Cart value: ${this.getSum()}`} leftIcon={<MoneyIcon />} />
        </List>
        <Divider />
        <List>
          {
            Object.keys(amounts).map(id => {
              const item = items.find(item => item.id == id)
              const amount = amounts[id]
              return (
                (amount)
                  ? <ListItem
                      primaryText={item.name}
                      secondaryText={`${amount} x ${formatPrice(item.price)}`}
                      rightIcon={<DeleteIcon onClick={() => onDelete(id)} />}
                    />
                  : null
              )
            })
          }
        </List>
      </div>
    )
  }
}

Cart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  amounts: PropTypes.object,
  onDelete: PropTypes.func
}

export default Cart