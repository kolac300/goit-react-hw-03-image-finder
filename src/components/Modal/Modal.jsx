import React, { Component } from 'react';
import { Div } from './Modal.styled';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
const modal = document.querySelector('#modal');

export class Modal extends Component {
  static propTypes = {
    modalURL: PropTypes.string.isRequired,
    toggleModal: PropTypes.func.isRequired,
  };

  backdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.toggleModal();
    }
  };

  hendlKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };
  componentDidMount = () => {
    window.addEventListener('keydown', this.hendlKeyDown);
  };
  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.hendlKeyDown);
  };

  render() {
    const { modalURL } = this.props;
    return createPortal(
      <Div onClick={this.backdropClick}>
        <div>
          <img src={modalURL} alt="pic" />
        </div>
      </Div>,
      modal
    );
  }
}
