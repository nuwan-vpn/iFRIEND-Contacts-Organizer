import React from 'react';

const ListContacts = ({ contacts }) => {
  return (
    <div>
      <h2>List Contacts</h2>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <p>Name: {contact.name}</p>
              <p>Phone Number: {contact.phoneNumber}</p>
              <p>Company Name: {contact.companyName}</p>
              <p>Salary: {contact.salary}</p>
              <p>Birthday: {contact.birthday}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts found.</p>
      )}
    </div>
  );
};

export default ListContacts;