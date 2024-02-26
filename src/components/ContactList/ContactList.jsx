import React from 'react';
import ContactItem from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, filter, onDeleteContact }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.ul}>
      {filteredContacts.map(contact => {
        return (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
