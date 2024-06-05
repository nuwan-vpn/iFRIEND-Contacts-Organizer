import React, { useState } from 'react';

const DeleteContact = ({ deleteContact, contacts }) => {
  const [selectedContact, setSelectedContact] = useState(null);

  const handleContactSelect = (e) => {
    const selectedId = e.target.value;
    const contact = contacts.find((contact) => contact.id === selectedId);
    setSelectedContact(contact);
  };

  const handleDelete = () => {
    deleteContact(selectedContact.id);
    setSelectedContact(null);
  };

  return (
    <div>
      <h2>Delete Contact</h2>
      <select onChange={handleContactSelect}>
        <option value="">Select a contact</option>
        {contacts && contacts.map((contact) => (
          <option key={contact.id} value={contact.id}>
            {contact.name}
          </option>
        ))}
      </select>
      {selectedContact && (
        <div>
          <p>
            Are you sure you want to delete the contact "{selectedContact.name}"?
          </p>
          <button onClick={handleDelete}>Delete Contact</button>
        </div>
      )}
    </div>
  );
};

export default DeleteContact;