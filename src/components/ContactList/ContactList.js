import React from 'react';
import ContactListItem from 'components/ContactListItem/ContactListItem';

function ContactList(props) {
  const filteredContacts = props.contacts.filter(contact =>
    contact.name.toLowerCase().includes(props.filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

export default ContactList;
