import React, { Component } from 'react'

import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar'

import PersonIcon from 'material-ui/svg-icons/social/person'

import List from '../List/List'

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

    }
  }
  render () {
    const { items } = this
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
              <List items={items}/>
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