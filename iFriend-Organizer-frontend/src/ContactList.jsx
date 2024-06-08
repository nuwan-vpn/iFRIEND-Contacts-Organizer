import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ContactList.css';  // Ensure you have a CSS file for styling

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/contacts')
      .then(response => {
        console.log('API response:', response.data); // Log the response
        if (Array.isArray(response.data)) {
          setContacts(response.data);
          setError('');  // Clear any previous errors
        } else {
          console.error('Expected array but got:', response.data);
          setContacts([]);
          setError('Error: Expected an array of contacts');
        }
      })
      .catch(error => {
        console.error('Error fetching contacts:', error);
        setError('Error fetching contacts. Please try again later.');
      });
  }, []);

  return (
    <div className='contact-list'>
      <h2>Contact List</h2>
      <Link to="/add">Add Contact</Link>
      {error && <p className='error-message'>{error}</p>}
      {contacts.length > 0 ? (
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              <p>Name: {contact.name}</p>
              <p>Phone: {contact.phoneNumber}</p>
              <p>Company: {contact.companyName}</p>
              <p>Salary: {contact.salary}</p>
              <p>Birthday: {contact.birthday}</p>
              <Link to={`/update/${contact.id}`}>Update</Link>
              <Link to={`/delete/${contact.id}`}>Delete</Link>
            </li>
          ))}
        </ul>
      ) : (
        !error && <p>No contacts found.</p>
      )}
    </div>
  );
};

export default ContactList;
