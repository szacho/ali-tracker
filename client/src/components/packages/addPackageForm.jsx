import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { withRouter } from 'react-router-dom';

import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import cls from '../../style-utils/colors'
import { FlatInput } from '../../style-utils/'

const renderInput = ({ input, label, type, id, meta: { touched, error, warning } }) => (
  <FormGroup>
    <LabelForm htmlFor={id}>{label}</LabelForm>
    <FlatInput id={id} error={error && touched} {...input} type={type}/>
    { error && touched && <ErrorLabel>{error}</ErrorLabel> }
  </FormGroup>
);

const renderRadioInput = ({ input, label, type, id, title }) => (
  <div>
    <input id={label} {...input} type={type}/>
    <LabelForm title={title} htmlFor={label}>{label}</LabelForm>
  </div>
);

const NavSubmitButton = withRouter(({ history }) => (
  <SubmitButton onClick={() => history.push('/')}>Dodaj</SubmitButton>
));

class AddPackage extends Component {
  handleAddPackage(values) {
    if(!this.props.token) {
      this.props.createToken(values.packageName, values.packageNumber, values.provider); //to refactor!!
    } else {
      this.props.addPackageToToken(values, this.props.token);
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return(
      <AddPackageForm onSubmit={handleSubmit(this.handleAddPackage.bind(this))}>

        <RadioGroup>
          <Field name="provider" component={renderRadioInput} title="Poczta Polska" value='PPSA' label="PPSA" type="radio" />
          <Field name="provider" component={renderRadioInput} title="Kurier DHL" value='DHL' label="DHL" type="radio" />
          <Field name="provider" component={renderRadioInput} title="Kurier UPS" value='UPS' label="UPS" type="radio" />
        </RadioGroup>

        <Field name="packageName" component={renderInput} id="packageName" label="Nazwa przesyłki" type="text" />
        <Field name="packageNumber" component={renderInput} id="packageNumber" label="Numer przesyłki" type="text" />

        <NavSubmitButton />
      </AddPackageForm>
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

const ErrorLabel = styled.span`
  color: ${ cls.error };
  font-size: 0.92rem;
  padding-top: 5px;
`;

const SubmitButton = styled.button`
  border: none;
  margin: 20px 0;
  width: 80px;
  height: 30px;
  background: ${ cls.mainRed };
  color: #fff;
  border-radius: 3px;
  align-self: flex-end;
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
    background: ${ cls.hoverRed };
    cursor: pointer;
  }
`;

const LabelForm = styled.label`
  font-size: 1rem;
  padding-bottom: 5px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  &:not(:last-of-type) {
    margin-bottom: 16px;
  }

`;

const RadioGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 16px;
  color: #fff;
  div:not(:first-child) {
    margin-left: 8px;
  }
  input[type="radio"]+label {
    border-radius: 3px;
    width: auto;
    background-color: #9E9E9E;
    cursor: pointer;
    padding: 5.5px;
    display: block;
    font-size: 1rem;
    font-weight: 700;
    transition: background .2s linear
  }
  input[type="radio"]:checked+label {
    background-color: ${cls.hoverRed};
    color: #fff;
  }
  input[type="radio"] {
    display: none;
  }
`;

const AddPackageForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
