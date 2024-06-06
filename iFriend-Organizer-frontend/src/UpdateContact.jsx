import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const UpdateContact = () => {
  const { id } = useParams();
  const [contact, setContact] = useState({
    name: '',
    phoneNumber: '',
    companyName: '',
    salary: '',
    birthday: '',
  });
  const history = useHistory();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/contacts/${id}`)
      .then(response => setContact(response.data))
      .catch(error => console.error('Error fetching contact:', error));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:8080/api/v1/contacts/${id}`, contact)
      .then(() => {
        history.push('/');
      })
      .catch(error => console.error('Error updating contact:', error));
  };

  return (
    <div>
      <h2>Update Contact</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Name:</label>
          <input type="text" value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} required />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="text" value={contact.phoneNumber} onChange={(e) => setContact({ ...contact, phoneNumber: e.target.value })} required />
        </div>
        <div>
          <label>Company Name:</label>
          <input type="text" value={contact.companyName} onChange={(e) => setContact({ ...contact, companyName: e.target.value })} required />
        </div>
        <div>
          <label>Salary:</label>
          <input type="number" value={contact.salary} onChange={(e) => setContact({ ...contact, salary: e.target.value })} required />
        </div>
        <div>
          <label>Birthday:</label>
          <input type="date" value={contact.birthday} onChange={(e) => setContact({ ...contact, birthday: e.target.value })} required />
        </div>
        <button type="submit">Update Contact</button>
      </form>
    </div>
  );
};

export default UpdateContact;
