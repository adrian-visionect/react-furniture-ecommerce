import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';

import styles from './App.module.css';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Switch>
        <Route path="/" exact />
      </Switch>
    </Router>
  );
}

export default App;
