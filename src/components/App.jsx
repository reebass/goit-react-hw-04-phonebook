import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Container, Subtitle, Title } from './App.styled';
import { ButtonWithIcon } from './ButtonWithIcon/ButtonWithIcon';
import { Modal } from './Modal/Modal';
import { HiPlusCircle } from 'react-icons/hi';
import { Message } from './Message/Message';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contactsParse = JSON.parse(localStorage.getItem('contacts'));
    if (contactsParse) {
      return contactsParse;
    }
  });
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = ({ name, number }) => {
    const newContacts = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevState => [newContacts, ...prevState]);

    togleModal();
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts
      .filter(({ name }) => name.toLowerCase().includes(normalizedFilter))
      .sort((firstName, secondName) =>
        firstName.name.localeCompare(secondName.name)
      );
  };

  const deliteContact = contactId => {
    setContacts(prevState => prevState.filter(({ id }) => id !== contactId));
  };

  const togleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      {contacts.length === 0 && <Message text="You don't have contacts yet" />}
      <ButtonWithIcon onClick={togleModal} aria-label="add phone">
        <HiPlusCircle size={20} />
        ADD PHONE
      </ButtonWithIcon>
      {showModal && (
        <Modal onClose={togleModal}>
          <ContactForm onSubmit={addContacts} contacts={contacts} />
        </Modal>
      )}
      {contacts.length !== 0 && (
        <>
          <Subtitle>Contacts</Subtitle>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList
            arrContacts={getVisibleContacts()}
            onDeleteContacts={deliteContact}
          />
        </>
      )}
    </Container>
  );
};
