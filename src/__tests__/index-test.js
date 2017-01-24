import React from 'react'
import { shallow, mount } from 'enzyme' // TODO: still want to use it?

import { createForm, createAddForm } from '../'

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
