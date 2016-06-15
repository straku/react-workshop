import React, { Component, PropTypes } from 'react'

import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

import style from './ItemCard.scss'

class ItemCard extends Component {
  render () {
    const { item } = this.props
    const { picture, name, material, price } = item
    const formattedPrice = `$ ${(price / 100).toFixed(2)}`
    return (
      <div className={style.card}>
        <Card>
          <CardMedia overlay={<CardTitle title={name} subtitle={material} />}>
            <img src={picture} />
          </CardMedia>
          <CardTitle title={formattedPrice}>
            <FlatButton className={style.add} primary={true} label="+ ADD" />
          </CardTitle>
        </Card>
      </div>
    )
  }
}

ItemCard.propTypes = {
  item: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    material: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
}

export default ItemCard