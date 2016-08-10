import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import MuiTheme from './components/MuiTheme/MuiTheme'
import App from './components/App/App'

import store from './store'

import './styles/fonts.css'
import './styles/main.css'

ReactDOM.render(
  <MuiTheme>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiTheme>,
  document.getElementById('root')
)
