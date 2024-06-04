import React, { useState } from 'react';

const UpdateContact = ({ updateContact, contacts }) => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedPhoneNumber, setUpdatedPhoneNumber] = useState('');
  const [updatedCompanyName, setUpdatedCompanyName] = useState('');
  const [updatedSalary, setUpdatedSalary] = useState(0);
  const [updatedBirthday, setUpdatedBirthday] = useState('');

  const handleContactSelect = (e) => {
    const selectedId = e.target.value;
    const contact = contacts.find((contact) => contact.id === selectedId);
    setSelectedContact(contact);
    setUpdatedName(contact.name);
    setUpdatedPhoneNumber(contact.phoneNumber);
    setUpdatedCompanyName(contact.companyName);
    setUpdatedSalary(contact.salary);
    setUpdatedBirthday(contact.birthday);
  };

  const handleUpdate = () => {
    const updatedContact = {
      id: selectedContact.id,
      name: updatedName,
      phoneNumber: updatedPhoneNumber,
      companyName: updatedCompanyName,
      salary: updatedSalary,
      birthday: updatedBirthday,
    };
    updateContact(updatedContact);
    // Reset fields after update
    setSelectedContact(null);
    setUpdatedName('');
    setUpdatedPhoneNumber('');
    setUpdatedCompanyName('');
    setUpdatedSalary(0);
    setUpdatedBirthday('');
  };

  return (
    <div>
      <h2>Update Contact</h2>
      <select onChange={handleContactSelect}>
        <option value="">Select a contact</option>
        {contacts.map((contact) => (
          <option key={contact.id} value={contact.id}>
            {contact.name}
          </option>
        ))}
      </select>
      {selectedContact && (
        <div>
          <label>
            Name:
            <input
              type="text"
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="text"
              value={updatedPhoneNumber}
              onChange={(e) => setUpdatedPhoneNumber(e.target.value)}
            />
          </label>
          <label>
            Company Name:
            <input
              type="text"
              value={updatedCompanyName}
              onChange={(e) => setUpdatedCompanyName(e.target.value)}
            />
          </label>
          <label>
            Salary:
            <input
              type="number"
              value={updatedSalary}
              onChange={(e) => setUpdatedSalary(e.target.value)}
            />
          </label>
          <label>
            Birthday:
            <input
              type="text"
              value={updatedBirthday}
              onChange={(e) => setUpdatedBirthday(e.target.value)}
            />
          </label>
          <button onClick={handleUpdate}>Update Contact</button>
        </div>
      )}
    </div>
  );
};

export default UpdateContact;