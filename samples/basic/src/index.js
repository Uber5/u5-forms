import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import { createAddForm } from 'u5-forms'

injectTapEventPlugin()

const Form = createAddForm()

const App = () => <MuiThemeProvider>
  <Form />
</MuiThemeProvider>

ReactDOM.render(<App />, document.getElementById('app'))
