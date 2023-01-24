import { Field, Formik } from 'formik';
import React, { Component } from 'react';
import { StyledForm } from './Searchbar.styled';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';

const initialValue = {
  search: '',
};
export class Searchbar extends Component {
  static propTypes = {
    updateSearch: PropTypes.func.isRequired,
  };
  onSubmit = (value, ections) => {
    const { search } = value;
    if (search.trim() === '' || search.trim().length > 50) {
      toast.error('Invalid query');
    } else {
      this.props.updateSearch(search);
      ections.resetForm();
    }
  };
  render() {
    return (
      <Formik initialValues={initialValue} onSubmit={this.onSubmit}>
        <StyledForm>
          <Field className="SearchForm-input" type="text" name="search" />
          <button className="SearchForm-button" type="submit">
            Find
          </button>
        </StyledForm>
      </Formik>
    );
  }
}
