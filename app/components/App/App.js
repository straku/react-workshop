import React, { Component } from 'react'
import { connect } from 'react-redux'

import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar'

import List from '../List/List'
import Cart from '../Cart/Cart'

import { getList } from '../../actions'

import style from './App.scss'

const paperStyle = {
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
              {
                (loader)
                  ? 'Loading list...'
                  : <List
                      items={items}
                      cart={cart}
                    />
              }
            </Paper>
          </section>
          <section className={style.cart}>
            <Paper style={paperStyle}>
              <Cart
                items={items}
                amounts={cart}
              />
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
