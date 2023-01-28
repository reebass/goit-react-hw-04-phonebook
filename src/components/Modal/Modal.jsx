import { useEffect } from 'react';
import { ModalBackDrop, ModalContent, CloseBtn } from './Modal.styled';
import { IoMdClose } from 'react-icons/io';
import PropTypes from 'prop-types';

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackDropClick = evt => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalBackDrop onClick={handleBackDropClick}>
      <ModalContent>
        <CloseBtn type="button" onClick={() => onClose()}>
          <IoMdClose size={25} />
        </CloseBtn>
        {children}
      </ModalContent>
    </ModalBackDrop>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node,
};
