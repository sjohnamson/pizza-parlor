import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import PizzaList from '../PizzaList/PizzaList';
import AdminTable from '../AdminTable/AdminTable';
import Header from '../Header/Header';

import CheckoutPage from '../CheckoutPage/CheckoutPage';
import CustomerForm from '../CustomerForm/CustomerForm';

function App() {
  return (
    <div className='App'>
      <Header />

      <Router>
        <img src='images/pizza_photo.png' />
        <p>Pizza is great.</p>
        <Route path='/' exact>
          <PizzaList />
        </Route>
        <Route path='/customerform' exact>
          <CustomerForm />
        </Route>
        <Route path='/checkoutpage'>
          <CheckoutPage />
        </Route>
        <Route path='/admin'>
          <AdminTable />
        </Route>
      </Router>

    </div>
  );
}

export default App;

