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
  render () {
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
              
            </Paper>
          </section>
          <section className={style.cart}>
            <Paper style={paperStyle}>
              
            </Paper>
          </section>
        </article>
      </div>
    )
  }
}

export default App