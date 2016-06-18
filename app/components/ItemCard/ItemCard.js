import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

import { addToCart } from '../../actions'

import style from './ItemCard.scss'

function ItemCard ({ id, amount, picture, name, material, price, dispatch }) {
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
            onClick={() => dispatch(addToCart(id))}
          />
        </CardTitle>
      </Card>
    </div>
  )
}

ItemCard.propTypes = {
  id: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  material: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default connect()(ItemCard)