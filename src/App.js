import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Slider from './components/Slider';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Slider />
      <Switch>
        <Route path="/" exact />
      </Switch>
    </Router>
  );
}

export default App;
