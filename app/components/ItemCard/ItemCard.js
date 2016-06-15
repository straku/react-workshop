import React, { Component, PropTypes } from 'react'

import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

import style from './ItemCard.scss'

class ItemCard extends Component {
  render () {
    const { id, amount, picture, name, material, price, onClick } = this.props
    const formattedPrice = `$ ${(price / 100).toFixed(2)}`
    return (
      <div className={style.card}>
        <Card>
          <CardMedia overlay={<CardTitle title={name} subtitle={material} />}>
            <img src={picture} />
            <div className={style.amount}>{amount || ''}</div>
          </CardMedia>
          <CardTitle title={formattedPrice}>
            <FlatButton
              className={style.add}
              primary={true}
              label="+ ADD"
              onClick={() => onClick(id)}
            />
          </CardTitle>
        </Card>
      </div>
    )
  }
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