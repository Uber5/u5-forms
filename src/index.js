import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

export const createForm = () => () => <p>This is not a form yet</p>

export const createAddForm = () => ({ submitLabel }) => (<form>
  <RaisedButton label={submitLabel}>
    huh (where is the label)
  </RaisedButton>
</form>)
