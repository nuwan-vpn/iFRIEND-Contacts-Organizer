import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteContact = () => {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const history = useHistory();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/contacts/${id}`)
      .then(response => setContact(response.data))
      .catch(error => console.error('Error fetching contact:', error));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/api/v1/contacts/${id}`)
      .then(() => {
        history.push('/');
      })
      .catch(error => console.error('Error deleting contact:', error));
  };

  return (
    <div>
      <h2>Delete Contact</h2>
      {contact && (
        <div>
          <p>Are you sure you want to delete the contact "{contact.name}"?</p>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={() => history.push('/')}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default DeleteContact;
