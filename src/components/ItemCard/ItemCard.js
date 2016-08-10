import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { Card, CardMedia, CardTitle } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

import { addToCart } from '../../actions'

import './ItemCard.css'

function ItemCard ({ id, amount, picture, name, material, price, dispatch }) {
  const formattedPrice = `$ ${(price / 100).toFixed(2)}`
  return (
    <div className="card">
      <Card>
        <CardMedia overlay={<CardTitle title={name} subtitle={material} />}>
          <img src={picture} role="presentation" />
          <div className="amount">{amount || ''}</div>
        </CardMedia>
        <CardTitle title={formattedPrice}>
          <FlatButton
            className="add"
            primary={true}
            label="+ ADD"
            style={{ position: 'absolute' }}
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
