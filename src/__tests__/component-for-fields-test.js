import React from 'react'
import { Provider } from 'react-redux'
import { reduxForm } from 'redux-form'
import { componentForFields } from '../'

import configureMockStore from 'redux-mock-store'

describe('componentForFields', () => {
  it('constructs fields for each field type', () => {
    const fields = [
      { name: 'someText', label: 'Label for multiline', type: 'multiline' },
      { name: 'someDate', label: 'Label for a date', type: 'date' },
      { name: 'someField', label: 'Some field without type' },
      { name: 'someTextField', label: 'Label for text field', type: 'text' },
      { name: 'someNameField', label: 'Label for name field', type: 'name' },
      { name: 'someEmailField', label: 'Label for email field', type: 'email' },
      { name: 'someIdnoField', label: 'Label for idno field', type: 'idno' },
      { name: 'someBooleanField', label: 'Label for boolean field', type: 'boolean' },
    ]
    const Component = componentForFields(fields)

    const mockStore = configureMockStore([])

    const store = {
      subscribe: f => f,
      dispatch: f => f,
      getState: () => ({})
    }
    const Form = reduxForm({
      form: 'test',
      store: mockStore({})
    })(() => <Component />)
    const rendered = render(<Provider store={mockStore({})} ><Form /></Provider>)
    expect(rendered).toMatchSnapshot()
  })
})
