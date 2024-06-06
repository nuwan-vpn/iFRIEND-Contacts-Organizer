import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/contacts')
      .then(response => setContacts(response.data))
      .catch(error => console.error('Error fetching contacts:', error));
  }, []);

  return (
    <div>
      <h2>Contact List</h2>
      <Link to="/add">Add New Contact</Link>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <p>Name: {contact.name}</p>
            <p>Phone Number: {contact.phoneNumber}</p>
            <p>Company Name: {contact.companyName}</p>
            <p>Salary: {contact.salary}</p>
            <p>Birthday: {contact.birthday}</p>
            <Link to={`/update/${contact.id}`}>Update</Link>
            <Link to={`/delete/${contact.id}`}>Delete</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
