import React, { Component } from 'react'

import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar'

import PersonIcon from 'material-ui/svg-icons/social/person'

import List from '../List/List'
import Cart from '../Cart/Cart'

import { getSync, getAsync } from '../../api'

import style from './App.scss'

const paperStyle = {
  width: '100%',
  minHeight: '100%'
}

class App extends Component {
  constructor () {
    super()

    this.items = getSync(6)

    this.state = {
      cart: {}
    }
  }

  handleAdd (id) {
    const { cart } = this.state
    const updatedCart = Object.assign({}, cart)

    if (cart[id]) {
      updatedCart[id]++
    } else {
      updatedCart[id] = 1
    }

    this.setState({
      cart: updatedCart
    })
  }

  handleDelete (id) {
    const { cart } = this.state
    this.setState({
      cart: Object.assign({}, cart, {
        [id]: 0
      })
    })
  }

  render () {
    const { items } = this
    const { cart } = this.state
    return (
      <div className={style.app}>
        <nav>
          <AppBar
            title="SuperShop"
            showMenuIconButton={false}
          />
        </nav>
        <article className={style.main}>
          <section className={style.list}>
            <Paper style={paperStyle}>
              <List
                items={items}
                cart={cart}
                onAdd={id => this.handleAdd(id)}
              />
            </Paper>
          </section>
          <section className={style.cart}>
            <Paper style={paperStyle}>
              <Cart
                items={items}
                amounts={cart}
                onDelete={id => this.handleDelete(id)}
              />
            </Paper>
          </section>
        </article>
      </div>
    )
  }
}

export default App