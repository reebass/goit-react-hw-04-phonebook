import { ContactItem } from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
import { Item, List } from './ContactsList.styled';


export const ContactList = ({ arrContacts, onDeleteContacts }) => {
  return (
    <List>
      {arrContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <ContactItem
            onDeleteContacts={onDeleteContacts}
            id={id}
            name={name}
            number={number}
          />
        </Item>
      ))}
    </List>
  );
};


ContactList.propTypes = {
  arrContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteContacts: PropTypes.func,
};

