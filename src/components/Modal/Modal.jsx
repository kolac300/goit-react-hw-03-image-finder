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
    const { toggleModal, modalURL } = this.props;
    return createPortal(
      <Div onClick={toggleModal}>
        <div>
          <img src={modalURL} alt="pic" />
        </div>
      </Div>,
      modal
    );
  }
}
