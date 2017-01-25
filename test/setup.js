import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import renderer from 'react-test-renderer'

global.render = component => {
  const wrapped = <MuiThemeProvider>{ component }</MuiThemeProvider>
  return renderer.create(wrapped)
}
