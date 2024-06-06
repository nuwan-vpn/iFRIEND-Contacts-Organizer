import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactList from './ContactList';
import AddContact from './AddContact';
import UpdateContact from './UpdateContact';
import DeleteContact from './DeleteContact';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Contact Manager</h1>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/update/:id" element={<UpdateContact />} />
          <Route path="/delete/:id" element={<DeleteContact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
