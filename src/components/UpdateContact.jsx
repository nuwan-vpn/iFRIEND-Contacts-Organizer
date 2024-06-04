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
        {contacts && contacts.map((contact) => (
          <option key={contact.id} value={contact.id}>
            {contact.name}
          </option>
        ))}
      </select>
      {selectedContact && (
        <div>
          {/* ... (rest of the component) */}
        </div>
      )}
    </div>
  );
};

export default UpdateContact;