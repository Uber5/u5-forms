import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {
  Card, CardActions, CardHeader, CardMedia, CardTitle, CardText
} from 'material-ui/Card'
import Subheader from 'material-ui/Subheader'

import injectTapEventPlugin from 'react-tap-event-plugin'

import { createAddForm, componentForFields } from '../../../src'

injectTapEventPlugin()

const fields = [
  { name: 'someText', label: 'Label for multiline', type: 'multiline' },
  { name: 'someDate', label: 'Label for a date', type: 'date' },
  { name: 'someField', label: 'Some field without type' },
  { name: 'someTextField', label: 'Label for text field', type: 'text' },
  { name: 'someBooleanField', label: 'Label for boolean field', type: 'boolean' },
  { name: 'someNameField', label: 'Label for name field', type: 'name' },
  { name: 'someEmailField', label: 'Label for email field', type: 'email' },
  { name: 'someIdnoField', label: 'Label for ID number field', type: 'idno' },
]
const FieldsComponent = componentForFields(fields)

const AddForm = createAddForm({
  submitLabel: 'Submit me...',
  formName: 'test1',
  fields: <FieldsComponent />
})

const EditForm = createAddForm({
  submitLabel: 'Update',
  formName: 'test2',
  fields: <FieldsComponent />,
  initialValues: () => ({
    someText: 'Hey,\nThis is some text.',
    someDate: new Date(), // ISO String works, too: '2017-03-02T19:54:33.268Z',
    someField: 'some field value',
    someTextField: 'some field value (text)',
    someBooleanField: true,
    someNameField: 'Chris',
    someEmailField: 'x@test.com',
    someIdnoField: '8210155896084'
  })
})

const store = createStore(
  combineReducers({
    form: formReducer
  })
)

const App = () => <Provider store={store}><MuiThemeProvider>
  <div>
    <Card>
      <CardHeader
        title="Form Example 1"
        subtitle="Adding stuff"
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        <h3>Add Stuff</h3>
        <AddForm />
      </CardText>
    </Card>
    <Card>
      <CardHeader
        title="Form Example 2"
        subtitle="Editing stuff"
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        <h3>Edit Stuff</h3>
        <EditForm />
      </CardText>
    </Card>
  </div>
</MuiThemeProvider></Provider>

ReactDOM.render(<App />, document.getElementById('app'))
