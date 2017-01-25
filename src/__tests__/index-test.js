import React from 'react'
import { shallow, mount } from 'enzyme' // TODO: still want to use it?

import { createAddForm } from '../'

describe('createForm', () => {

  // A somewhat pointless test, just to demonstrate we can use shallow rendering
  it('with no options, renders a "RaisedButton"', () => {
    const Form = createAddForm({})
    const rendered = shallow(<Form />)
    expect(rendered.text()).toMatch(/RaisedButton/)
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
