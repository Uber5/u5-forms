import React from 'react'
import * as R from 'ramda'
import combineComponents from './combine-components'
import { Field } from 'redux-form'
import { TextField, Checkbox } from 'redux-form-material-ui'
import DatePicker from 'material-ui/DatePicker'

import Divider from 'material-ui/Divider'
import { normalizeSouthAfricanIDNumber, isValidSouthAfricanIDNumber } from 'validator-sa'


const normalizeIDNumberForDisplay = R.when(
  isValidSouthAfricanIDNumber,
  normalizeSouthAfricanIDNumber
)

 const TextFieldWithoutUnderline =
   props => <TextField underlineShow={false} {...props} />

const DateField = props => {

  const inputValue = props.input.value
  const value = inputValue instanceof Date
    ? inputValue
    : ('' + inputValue).length === 0
      ? null
      : new Date(Date.parse(inputValue))

  return <DatePicker
    name={props.input.name}
    value={value}
    onChange={(_, v) => {
      props.input.onChange(v)}
    }
  />

}

 const fieldCreators = {
   text: f => props => <Field
     name={f.name} key={f.name} component={TextFieldWithoutUnderline}
     floatingLabelText={f.label}
     hintText={f.label} type={f.type}
     fullWidth={true} inputMode="latin"
   />,
   name: f => props => <Field
     name={f.name} key={f.name} component={TextFieldWithoutUnderline}
     floatingLabelText={f.label}
     hintText={f.label} type={f.type}
     fullWidth={true} inputMode="latin-name"
   />,
   date: f => props => <Field key={f.name} name={f.name} component={DateField}
   />,
   multiline: f => props => <Field
     name={f.name} component={TextFieldWithoutUnderline}
     fullWidth={true} multiLine={true}
     floatingLabelText={f.label} hintText={f.label} type="text"
     inputMode="latin-prose"
   />,
   email: f => props => <Field name={f.name} component={TextFieldWithoutUnderline}
     floatingLabelText={f.label} type="email"
     fullWidth={true}
   />,
   tel: f => props => <Field name={f.name} component={TextFieldWithoutUnderline}
     floatingLabelText={f.label} type="tel" normalize={normalizeTel}
     fullWidth={true}
   />,
   idno: f => props => <Field name={f.name} component={TextFieldWithoutUnderline}
     floatingLabelText={f.label} type="text" inputMode="numeric"
     normalize={normalizeIDNumberForDisplay}
     fullWidth={true}
   />,
   boolean: f => props => <Field
     name={f.name} component={Checkbox} label={f.label}
   />
 }

 const fieldCreator = R.compose(
   R.when(R.isNil,() => f => props => <p>Unknown field type</p>),
   R.flip(R.prop)(fieldCreators)
 )

 const createField = field => {
   console.log('createField', field);
   return R.compose(
     c => props => <div>
       {c(props)}
       <Divider />
       </div>,
     creator => creator(field),
     fieldCreator,
     R.when(
       R.pipe(t => fieldCreators[t], R.isNil),
       // TODO: discouraged to throw errors in functional code (discussion: https://github.com/ramda/ramda/issues/1317)
       type => {throw new Error(`fieldCreators, type ${ type } not found.`)}
     ),
     R.propOr('text', 'type')
   )(field)
 }

 export default R.compose(
   fields => R.apply(combineComponents, fields),
   R.map(createField)
 )
