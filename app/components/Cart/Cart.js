import React, { Component, PropTypes } from 'react'

import { List, ListItem } from 'material-ui/List'

import MoneyIcon from 'material-ui/svg-icons/editor/attach-money'
import Divider from 'material-ui/Divider'

import style from './Cart.scss'

class Cart extends Component {
  getSum () {
    const { items, amounts } = this.props
    let sum = 0
    Object.keys(amounts).forEach(id => {
      sum += amounts[id] * items.find(item => item.id == id).price
    })
    return `$ ${(sum / 100).toFixed(2)}`
  }

  render () {
    const { items, amounts } = this.props
    return (
      <div className={style.list}>
        <List>
          <ListItem primaryText={`Cart value: ${this.getSum()}`} leftIcon={<MoneyIcon />} />
        </List>
        <Divider />
        <List>
        </List>
      </div>
    )
  }
}

Cart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  amounts: PropTypes.object
}

export default Cart