import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import { createAddForm, componentForFields } from 'u5-forms'

injectTapEventPlugin()

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
const FieldsComponent = componentForFields(fields)

const Form = createAddForm({
  submitLabel: 'Submit me...',
  formName: 'test1',
  fields: <FieldsComponent />
})

const store = createStore(
  combineReducers({
    form: formReducer
  })
)

const App = () => <Provider store={store}><MuiThemeProvider>
  <Form />
</MuiThemeProvider></Provider>

ReactDOM.render(<App />, document.getElementById('app'))
