import React, { Component } from 'react';
import { StyledButton } from './Button.styled';
import PropTypes from 'prop-types';

export class Button extends Component {
  static propTypes = {
    updatePage: PropTypes.func.isRequired,
  };
  render() {
    return (
      <StyledButton onClick={this.props.updatePage}>Show more</StyledButton>
    );
  }
}
