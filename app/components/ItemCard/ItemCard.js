import React, { Component, PropTypes } from 'react'

import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

import style from './ItemCard.scss'

class ItemCard extends Component {
}

ItemCard.propTypes = {
  id: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  material: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ItemCard