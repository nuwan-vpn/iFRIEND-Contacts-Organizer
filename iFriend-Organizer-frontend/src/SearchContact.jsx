import React, { useState } from 'react';

const SearchContact = ({ contacts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(term) ||
        contact.phoneNumber.includes(term) ||
        contact.companyName.toLowerCase().includes(term)
    );
    setFilteredContacts(filtered);
  };

  return (
    <div>
      <h2>Search Contact</h2>
      <input
        type="text"
        placeholder="Search by name, phone number, or company"
        value={searchTerm}
        onChange={handleSearch}
      />
      {filteredContacts.length > 0 ? (
        <ul>
          {filteredContacts.map((contact) => (
            <li key={contact.id}>
              <p>Name: {contact.name}</p>
              <p>Phone Number: {contact.phoneNumber}</p>
              <p>Company Name: {contact.companyName}</p>
              <p>Salary: {contact.salary}</p>
              <p>Birthday: {contact.birthday}</p>
            </li>
          ))}
        </ul>
      ) : searchTerm.length > 0 ? (
        <p>No contacts found.</p>
      ) : null}
    </div>
  );
};

export default SearchContact;