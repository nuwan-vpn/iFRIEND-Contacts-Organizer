import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/contacts')
      .then(response => {
        console.log('API response:', response.data); // Log the response
        if (Array.isArray(response.data)) {
          setContacts(response.data);
        } else {
          console.error('Expected array but got:', response.data);
          setContacts([]);
        }
      })
      .catch(error => console.error('Error fetching contacts:', error));
  }, []);

  return (
    <div>
      <h2>Contact List</h2>
      <Link to="/add">Add Contact</Link>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              <p>Name: {contact.name}</p>
              <p>Phone: {contact.phoneNumber}</p>
              <Link to={`/update/${contact.id}`}>Update</Link>
              <Link to={`/delete/${contact.id}`}>Delete</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts found.</p>
      )}
    </div>
  );
};

export default ContactList;
