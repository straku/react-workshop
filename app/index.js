import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import React from 'react'
import ReactDOM from 'react-dom'

import MuiTheme from './components/MuiTheme/MuiTheme'
import App from './components/App/App'

import './styles/fonts.css'
import './styles/main.css'

ReactDOM.render(
  <MuiTheme>
    <App />
  </MuiTheme>,
  document.getElementById('root')
)