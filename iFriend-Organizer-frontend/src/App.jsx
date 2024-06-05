import { useState } from 'react';
import './App.css';
import AddContact from './components/AddContact';
import UpdateContact from './components/UpdateContact';
import DeleteContact from './components/DeleteContact';
import SearchContact from './components/SearchContact';
import ListContacts from './components/ListContacts';

const ContactManager = () => {
  const [contacts, setContacts] = useState([]);

  // Generate unique contact ID
  const generateId = () => {
    let lastId = contacts.length > 0 ? contacts[contacts.length - 1].id.substring(1) : '0000';
    let newId = String(parseInt(lastId) + 1).padStart(4, '0');
    return `C${newId}`;
  };

  // Add contact
  const addContact = () => {
    // Code to add a new contact
  };

  // Update contact
  const updateContact = () => {
    // Code to update an existing contact
  };

  // Delete contact
  const deleteContact = () => {
    // Code to delete a contact
  };

  // Search contact
  const searchContact = () => {
    // Code to search for a contact
  };

  // List contacts
  const listContacts = () => {
    // Code to list all contacts
  };

  // Exit application
  const exit = () => {
    // Code to exit the application
  };

  return (
    <div className="container">
      <h1>iFRIEND Contacts Organizer</h1>
      <AddContact addContact={addContact} />
      <UpdateContact updateContact={updateContact} />
      <DeleteContact deleteContact={deleteContact} />
      <SearchContact searchContact={searchContact} />
      <ListContacts listContacts={listContacts} contacts={contacts} />
      <button onClick={exit}>Exit</button>
    </div>
  );
};

export default ContactManager;