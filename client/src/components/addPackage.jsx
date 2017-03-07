import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import cls from '../style-utils/colors'

class AddPackage extends Component {
  handleAddPackage(values) {
    console.log(values);
  }

  renderField({ input, label, type, meta: { touched, error, warning } }) {
    return(
      <FormGroup>
        <LabelForm>{label}</LabelForm>
        <FlatInput {...input} type={type}/>
      </FormGroup>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    console.log(this.props);
    return(
      <AddPackageForm onSubmit={handleSubmit(this.handleAddPackage.bind(this))}>
        <Field name="packageName" component={this.renderField.bind(this)} label="Nazwa przesyłki" type="text" />
        <Field name="packageNumber" component={this.renderField.bind(this)} label="Numer przesyłki" type="text" />

        <SubmitButton>Dodaj</SubmitButton>
      </AddPackageForm>
    );
  }
}

export default reduxForm({
  form: 'add-package'
})(AddPackage);

const SubmitButton = styled.button`
  border: none;
  margin: 20px 0;
  width: 80px;
  height: 30px;
  background: ${ cls.mainRed };
  color: #fff;
  border-radius: 3px;
  align-self: flex-end;
`;

const LabelForm = styled.label`
  font-size: 1rem;
  padding-bottom: 5px;
`;

const FlatInput = styled.input`
  border: 1px solid #ddd;
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
