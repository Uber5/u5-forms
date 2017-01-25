import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton'

import componentForFields from './component-for-fields'

const createAddForm = ({
  submitLabel = 'submit',
  formName = 'form1',
  fields = null,
  onSubmit = v => {
    console.log('onSubmit (rather supply "onSubmit" to "createAddForm")', v)
  },
  validate = () => ({}),
  initialValues
}) => connect(
  (state, ownProps) => ({
    initialValues: initialValues && initialValues(state, ownProps)
  })
)(reduxForm({
  form: formName,
  onSubmit,
  validate
})(({ pristine, submitting, invalid, handleSubmit }) => (<form>
  {fields}
  <RaisedButton
    label={submitLabel} primary={true} type="submit"
    disabled={pristine || submitting || invalid} />
</form>)))

export { componentForFields, createAddForm }
