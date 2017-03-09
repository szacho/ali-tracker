import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import cls from '../../style-utils/colors'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <FormGroup>
    <LabelForm>{label}</LabelForm>
    <FlatInput error={error && touched} {...input} type={type}/>
    { error && touched && <ErrorLabel>{error}</ErrorLabel> }
  </FormGroup>
);

class AddPackage extends Component {
  handleAddPackage(values) {
    const { packageName, packageNumber } = values;
    this.props.checkPackageNumber(packageName, packageNumber);
  }

  //DEVELOPMENT ONLY
  componentWillMount() {
    this.props.checkPackageNumber('Happy Package', 'testp0');
  }

  render() {
    const { handleSubmit } = this.props;
    return(
      <AddPackageForm onSubmit={handleSubmit(this.handleAddPackage.bind(this))}>
        <Field name="packageName" component={renderField} label="Nazwa przesyłki" type="text" />
        <Field name="packageNumber" component={renderField} label="Numer przesyłki" type="text" />

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

export default connect(null, actions)(reduxForm({
  form: 'add-package',
  validate
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
  margin-top: 16px;
`;

const AddPackageForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;