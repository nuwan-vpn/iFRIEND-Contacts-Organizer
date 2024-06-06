import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route path="/" exact component={ContactList} />
          <Route path="/add" component={AddContact} />
          <Route path="/update/:id" component={UpdateContact} />
          <Route path="/delete/:id" component={DeleteContact} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
