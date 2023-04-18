import React from 'react';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
      ))}
    </List>
  );
};

export default ContactList;
