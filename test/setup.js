import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import renderer from 'react-test-renderer'

function createNodeMock() {
  // You can return anything from this function.
  // For example:
  return {
    focus() {
      // Do nothing
    }
  }
}

global.render = component => {
  const wrapped = <MuiThemeProvider>{ component }</MuiThemeProvider>

  return renderer.create(wrapped, {createNodeMock})
}
