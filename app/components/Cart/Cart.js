import React, { Component, PropTypes } from 'react'

import { List, ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'

import MoneyIcon from 'material-ui/svg-icons/editor/attach-money'
import DeleteIcon from 'material-ui/svg-icons/action/delete'

import { formatPrice } from '../../utils'

import style from './Cart.scss'

class Cart extends Component {
}

Cart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  amounts: PropTypes.object,
  onDelete: PropTypes.func
}

export default Cart