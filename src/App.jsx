import { useState } from 'react';
import './App.css';

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
    <div>
      <h1>iFRIEND Contacts Organizer</h1>
      <ul>
        <li>
          <button onClick={addContact}>Add Contact</button>
        </li>
        <li>
          <button onClick={updateContact}>Update Contact</button>
        </li>
        <li>
          <button onClick={deleteContact}>Delete Contact</button>
        </li>
        <li>
          <button onClick={searchContact}>Search Contact</button>
        </li>
        <li>
          <button onClick={listContacts}>List Contacts</button>
        </li>
        <li>
          <button onClick={exit}>Exit</button>
        </li>
      </ul>
    </div>
  );
};

function App() {
  return <ContactManager />;
}

export default App;