import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import cls from '../../style-utils/colors'

const renderInput = ({ input, label, type, id, meta: { touched, error, warning } }) => (
  <FormGroup>
    <LabelForm htmlFor={id}>{label}</LabelForm>
    <FlatInput id={id} error={error && touched} {...input} type={type}/>
    { error && touched && <ErrorLabel>{error}</ErrorLabel> }
  </FormGroup>
);

const renderRadioInput = ({ input, label, type, id }) => (
  <div>
    <input id={label} {...input} type={type}/>
    <LabelForm htmlFor={label}>{label}</LabelForm>
  </div>
);

class AddPackage extends Component {
  handleAddPackage(values) {
    const url = location.pathname;
    if(url === '/') {
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
          <Field name="provider" component={renderRadioInput} value='PPSA' label="PPSA" type="radio" />
          <Field name="provider" component={renderRadioInput} value='DHL' label="DHL" type="radio" />
        </RadioGroup>

        <Field name="packageName" component={renderInput} id="packageName" label="Nazwa przesyłki" type="text" />
        <Field name="packageNumber" component={renderInput} id="packageNumber" label="Numer przesyłki" type="text" />

        <SubmitButton>Dodaj</SubmitButton>
      </AddPackageForm>
    );
  }
}

const validate = values => {
  const errors = {};
  if(!values.packageNumber) {
    errors.packageNumber = 'Podaj numer przesyłki!'
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

const FlatInput = styled.input`
  border: 1px solid ${props => props.error ? cls.error : '#ddd' };
  border-radius: 3px;
  margin: 0;
  padding: 3px 8px;
  height: 20px;
  font-size: 1.0rem;
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
  color: #555;
  div:not(:first-child) {
    margin-left: 8px;
  }
  input[type="radio"]+label {
    border-radius: 3px;
    width: auto;
    background-color: #D2D5DA;
    cursor: pointer;
    padding: 5.5px;
    display: block;
    font-size: 1rem;
    font-weight: 700;
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
