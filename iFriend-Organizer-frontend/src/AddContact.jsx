import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddContact = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [salary, setSalary] = useState('');
  const [birthday, setBirthday] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name,
      phoneNumber,
      companyName,
      salary: parseFloat(salary),
      birthday,
    };

    axios.post('http://localhost:8080/api/v1/contacts', newContact)
      .then(response => {
        console.log('Contact added:', response.data);
        // Navigate to the contact list page after adding the contact
        navigate('/');
      })
      .catch(error => console.error('Error adding contact:', error));
    
    // Reset form fields after adding the contact
    setName('');
    setPhoneNumber('');
    setCompanyName('');
    setSalary('');
    setBirthday('');
  };

  return (
    <div>
      <h2>Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="salary">Salary:</label>
          <input
            type="number"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="birthday">Birthday:</label>
          <input
            type="text"
            id="birthday"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default AddContact;
