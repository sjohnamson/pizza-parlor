import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import PizzaList from '../PizzaList/PizzaList';

import CheckoutPage from '../CheckoutPage/CheckoutPage';
import CustomerForm from '../CustomerForm/CustomerForm';

function App() {


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>

      <Router>
        <img src='images/pizza_photo.png' />
        <p>Pizza is great.</p>
        <Route path='/' exact>
          <PizzaList  />
        </Route>
        <Route path='/customerform' exact>
          <CustomerForm />
        </Route>

      <Route path='/checkoutpage'>
        {/* <CheckoutPage/> */}
      </Route>

      </Router>
    </div>
  );
}

export default App;

