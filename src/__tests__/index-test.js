import { shallow, mount } from 'enzyme'
import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

import { createForm, createAddForm } from '../'

// Should go to some SETUP
import getMuiTheme from 'material-ui/styles/getMuiTheme';
const mountWithContext = (node) => mount(node, {
  context: {
    muiTheme: getMuiTheme(),
  },
  childContextTypes: {
    muiTheme: React.PropTypes.object.isRequired,
  }
});
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
// END SETUP


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
    const wrapper = mountWithContext(<Form />)
    console.log('wrapper.html', wrapper.html())
    const button = wrapper.find(RaisedButton)
    expect(button.label).toBe(labelText)
  })
})
