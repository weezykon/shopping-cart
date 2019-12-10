/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={ Home } />
        <Route path="/cart" component={ Cart } />
      </div>
    </Router>
  );
}

export default App;
