import React, { Component } from 'react';
import { ModalBackDrop, ModalContent, CloseBtn } from './Modal.styled';
import { IoMdClose } from 'react-icons/io';
import PropTypes from 'prop-types';

export class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func,
    children: PropTypes.node,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = evt => {
    const { onClose } = this.props;

    if (evt.code === 'Escape') {
      onClose();
    }
  };

  handleBackDropClick = evt => {
    const { onClose } = this.props;

    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  render() {
    const { onClose, children } = this.props;
    return (
      <ModalBackDrop onClick={this.handleBackDropClick}>
        <ModalContent>
          <CloseBtn type="button" onClick={() => onClose()}>
            <IoMdClose size={25} />
          </CloseBtn>
          {children}
        </ModalContent>
      </ModalBackDrop>
    );
  }
}
