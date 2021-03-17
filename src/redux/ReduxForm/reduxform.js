import React from 'react';
import { connect } from 'react-redux';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import Input from './input'

const onSubmit = (values) =>{
    console.log(values);
}

var SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <div >
    {
      props._firstName
    }
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component={Input}
            
            
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />{' '}
            Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />{' '}
            Female
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="other" />{' '}
            Other
          </label>
        </div>
      </div>
      <div>
        <label>Favorite Color</label>
        <div>
          <Field name="favoriteColor" component="select">
            <option />
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field
            name="employed"
            id="employed"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" onClick={handleSubmit(onSubmit)} disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </div>
  )
}



// SimpleForm = reduxForm({
//   form: 'simple', // a unique identifier for this form
//   //validate,
// })(SimpleForm);

SimpleForm = reduxForm({
  form: 'simple'
})(SimpleForm);

const selector = formValueSelector('simple');

const mapStateToProps = (state)=>{
  return{
    _firstName : selector(state, 'firstName' )
  }
}

const mapDispatchToProps  = (dispatch) =>{
  return{
    
  }
}


export default connect(mapStateToProps, mapDispatchToProps )(SimpleForm);