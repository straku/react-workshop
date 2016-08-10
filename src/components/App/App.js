import React, { Component } from 'react'
import { connect } from 'react-redux'

import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar'
import Loader from 'material-ui/CircularProgress'

import List from '../List/List'
import Cart from '../Cart/Cart'

import { getList } from '../../actions'

import './App.css'

const paperStyle = {
  position: 'relative',
  width: '100%',
  minHeight: '100%'
}

class App extends Component {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(getList())
  }

  render () {
    const { loader, items, cart } = this.props
    return (
      <div className="app">
        <nav>
          <AppBar
            title="SuperShop"
            showMenuIconButton={false}
          />
        </nav>
        <article className="main">
          <section className="list">
            <Paper style={paperStyle}>
              {
                (loader)
                  ? <Loader className="loader" style={{ position: 'absolute' }} />
                  : <List items={items} cart={cart} />
              }
            </Paper>
          </section>
          <section className="cart">
            <Paper style={paperStyle}>
              <Cart items={items}  amounts={cart} />
            </Paper>
          </section>
        </article>
      </div>
    )
  }
}

function select (state) {
  return {
    loader: state.list.loader,
    items: state.list.data,
    cart: state.cart
  }
}

export default connect(select)(App)
