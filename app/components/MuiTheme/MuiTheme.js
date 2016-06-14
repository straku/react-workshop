import React, { PropTypes } from 'react'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import theme from './theme'

const MuiTheme = ({ children }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
    {children}
  </MuiThemeProvider>
)

MuiTheme.propTypes = {
  children: PropTypes.element
}

export default MuiTheme