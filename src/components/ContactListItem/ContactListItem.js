import React from 'react';
import { IoIosContact } from 'react-icons/io';
import { MdDeleteForever } from 'react-icons/md';
import { Button, ListItem } from './ContactListItem.styled';

const ContactListItem = ({ contact, onDeleteContact }) => {
  return (
    <ListItem>
      <IoIosContact size="16" />
      {contact.name}: {contact.number}
      <Button type="button" onClick={() => onDeleteContact(contact.id)}>
        Delete <MdDeleteForever size="16" />
      </Button>
    </ListItem>
  );
};

export default ContactListItem;
