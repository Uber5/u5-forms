import { shallow } from 'enzyme'
import React from 'react'
import { createForm } from '../'

describe('createForm', () => {
  it('does the dummy thing', () => {
    const Form = createForm()
    const rendered = shallow(<Form />)
    expect(rendered.text()).toEqual('This is not a form yet')
  })
})
