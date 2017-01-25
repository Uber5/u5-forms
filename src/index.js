import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

import componentForFields from './component-for-fields'

const createAddForm = ({ submitLabel = 'submit' }) => () => (<form>
  <RaisedButton label={submitLabel}>
  </RaisedButton>
</form>)

export { componentForFields, createAddForm }
