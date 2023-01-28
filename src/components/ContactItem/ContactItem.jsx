import PropTypes from 'prop-types';
import { IoMdClose } from 'react-icons/io';
import { Button, ContactWrap, Name, Number } from './ContactItem.styled';



export const ContactItem = ({ name, number, id, onDeleteContacts }) => {
  return (
    <>
      <ContactWrap>
        <Name>{name}</Name>
        <Number>{number}</Number>
      </ContactWrap>
      <Button type="button" onClick={() => onDeleteContacts(id)}>
        <IoMdClose size={25} />
      </Button>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContacts: PropTypes.func,
};
