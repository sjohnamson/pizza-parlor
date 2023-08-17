import React from 'react';
import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';


function App() {
  console.log("in appppppppp");

  const [pizzaList, setPizzaList] = useState([])

  useEffect(() => { fetchPizzas() }, [])

  const fetchPizzas = () => {
    axios.get('/api/pizza')
      .then(response => {
        setPizzaList(response.data)
      }).catch((error) => {
        console.log('fetch failed:', error);
      })
  }



  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>

      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>

      <ul>
        {pizzaList.map((pizza, index) =>
          <li key={index}>{pizza.name}</li>
        )}
      </ul>

    </div>
  );
}

export default App;
