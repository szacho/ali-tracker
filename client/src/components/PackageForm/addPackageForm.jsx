import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

const renderInput = ({ input, label, type, id, meta: { touched, error, warning } }) => (
  <div className="add-package_form-group">
    <label className="add-package_form-label" htmlFor={id}>{label}</label>
    <input className={`add-package_input ${error && touched ? "add-package_input--error" : ""}`} id={id} error={error && touched} {...input} type={type}/>
    { error && touched && <span className="error_label">{error}</span> }
  </div>
);

const renderRadioInput = ({ input, label, type, id, title }) => (
  <div>
    <input id={label} {...input} type={type}/>
    <label className="add-package_form-label" title={title} htmlFor={label}>{label}</label>
  </div>
);

const NavSubmitButton = withRouter(({ history }) => (
  <button className="add-package_submit-btn" title="Dodaj przesyłkę" onClick={() => history.push('/')}>Dodaj</button>
));

class AddPackage extends Component {
  handleAddPackage(values) {
    if(!this.props.token) {
      this.props.createToken(values)
      .then(() => {
        const isNew = true;
        this.props.loadToken(this.props.token, isNew);
      });
    } else {
      this.props.addPackageToToken(values, this.props.token);
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return(
      <form className="add-package" onSubmit={handleSubmit(this.handleAddPackage.bind(this))}>

        <div className="add-package_radio-group">
          <Field name="provider" component={renderRadioInput} title="Poczta Polska" value='PPSA' label="PPSA" type="radio" />
          <Field name="provider" component={renderRadioInput} title="Kurier DHL" value='DHL' label="DHL" type="radio" />
          <Field name="provider" component={renderRadioInput} title="Kurier UPS" value='UPS' label="UPS" type="radio" />
        </div>

        <Field name="packageName" component={renderInput} id="packageName" label="Nazwa przesyłki" type="text" />
        <Field name="packageNumber" component={renderInput} id="packageNumber" label="Numer przesyłki" type="text" />

        <NavSubmitButton />
      </form>
    );
  }
}

const validate = values => {
  const errors = {};
  if(!values.packageNumber) {
    errors.packageNumber = 'Podaj numer przesyłki!'
  }
  if(!values.packageName) {
    errors.packageName = 'Podaj nazwę przesyłki!'
  } else if(values.packageName.length > 40) {
    errors.packageName = 'Nazwa przesyłki powinna być krótsza niż 50 znaków!'
  }
  return errors;
}

function mapStateToProps(state) {
  return { token: state.token.token };
}

export default connect(mapStateToProps, actions)(reduxForm({
  form: 'add-package',
  validate,
  initialValues: {provider: "PPSA"}
})(AddPackage))
