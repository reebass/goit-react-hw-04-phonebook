import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Container, Subtitle, Title } from './App.styled';
import { ButtonWithIcon } from './ButtonWithIcon/ButtonWithIcon';
import { Modal } from './Modal/Modal';
import { HiPlusCircle } from 'react-icons/hi';
import { Message } from './Message/Message';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const contactsParse = JSON.parse(localStorage.getItem('contacts'));
    if (contactsParse) {
      this.setState({ contacts: contactsParse });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }

    // if(contacts.length > prevState.contacts.length && prevState.contacts.length === 0) {
    //   this.togleModal()
    //   console.log(contacts)
    // }
  }

  addContacts = ({ name, number }) => {
    const newContacts = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [newContacts, ...prevState.contacts],
    }));

    this.togleModal();
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts
      .filter(({ name }) => name.toLowerCase().includes(normalizedFilter))
      .sort((firstName, secondName) =>
        firstName.name.localeCompare(secondName.name)
      );
  };

  deliteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  togleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { filter, contacts, showModal } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <Title>Phonebook</Title>
        {contacts.length === 0 && (
          <Message text="You don't have contacts yet" />
        )}
        <ButtonWithIcon onClick={this.togleModal} aria-label="add phone">
          <HiPlusCircle size={20} />
          ADD PHONE
        </ButtonWithIcon>
        {showModal && (
          <Modal onClose={this.togleModal}>
            <ContactForm onSubmit={this.addContacts} contacts={contacts} />
          </Modal>
        )}
        {contacts.length !== 0 && (
          <>
            <Subtitle>Contacts</Subtitle>
            <Filter value={filter} onChange={this.changeFilter} />
            <ContactList
              arrContacts={visibleContacts}
              onDeleteContacts={this.deliteContact}
            />
          </>
        )}
      </Container>
    );
  }
}
