import React from 'react';

const AddContact = ({ addContact }) => {
  // Add contact form and logic
  return (
    <div>
      <h2>Add Contact</h2>
      {/* Form for adding a new contact */}
      <button onClick={addContact}>Add Contact</button>
    </div>
  );
};

export default AddContact;