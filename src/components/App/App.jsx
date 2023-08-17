import React from 'react';
import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';
import PizzaList from '../PizzaList/PizzaList';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


function App() {

  const [name, setName] = useState('')
  const [streetAddress, setStreetAddress] = useState('')
  const [city, setCity] = useState('')
  const [zip, setZip] = useState('')

  const [type, setType] = React.useState(null);

  const handleTypeChange = (event) => {
    event.preventDefault()
    console.log("Type before", type, "event.target.value", event.target.value)
    setType(event.target.value);
    console.log("Type after", type, "event.target.value", event.target.value)
  };
 
  
  



  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("inside handleSubmit")
  }
  



  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>

      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>

      <PizzaList />

      <form onSubmit={handleSubmit} className="add-customer-information-form">
        <input 
          required 
          placeholder="Name" 
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input 
          required 
          placeholder="Street Address" 
          value={streetAddress}
          onChange={(event) => setStreetAddress(event.target.value)}
        />
        <input 
          required 
          placeholder="City" 
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <input 
          required 
          placeholder="Zip" 
          value={zip}
          onChange={(event) => setZip(event.target.value)}
        />
        <div>
        <FormControl>
  <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
  <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="controlled-radio-buttons-group"
    value={type}
    onChange={handleTypeChange}
  >
    <FormControlLabel value="Pickup" control={<Radio />} label="Pickup" />
    <FormControlLabel value="Delivery" control={<Radio />} label="Delivery" />
  </RadioGroup>
</FormControl>
     
      </div>
        </form>

    </div>
  );
}

export default App;
