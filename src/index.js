import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

export const createAddForm = ({ submitLabel = 'submit' }) => () => (<form>
  <RaisedButton label={submitLabel}>
  </RaisedButton>
</form>)
