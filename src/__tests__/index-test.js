import React from 'react'
import { shallow, mount } from 'enzyme' // TODO: still want to use it?

import { createForm, createAddForm } from '../'

import renderer from 'react-test-renderer'

// TODO: should be in *another* place
// import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
const render = component => {
  const wrapped = <MuiThemeProvider>{ component }</MuiThemeProvider>
  return renderer.create(wrapped)
}
// END TODO

describe('createForm', () => {
  it('does the dummy thing', () => {
    const Form = createForm()
    const rendered = shallow(<Form />)
    expect(rendered.text()).toMatch(/This is not/)
  })
})

describe('createAddForm', () => {
  it('renders a submit button with the label provided', () => {
    const labelText = 'Submit it, now...'
    const Form = createAddForm({ submitLabel: labelText })
    const tree = render(<Form />)
    expect(tree).toMatchSnapshot()
  })
})
