import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';

function CustomerForm() {

  const [name, setName] = useState('')
  const [streetAddress, setStreetAddress] = useState('')
  const [city, setCity] = useState('')
  const [zip, setZip] = useState('')

  const dispatch = useDispatch();
  const history = useHistory();

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
    let newCustomerInfo = {
      customer_name: name,
      street_address: streetAddress,
      city: city,
      zip: zip,
      type: type
    }
    console.log(`Adding newCustomerInfo`, { name, streetAddress, city, zip, type })
    dispatch({
      type: "MAKE_CUSTOMER",
      payload: newCustomerInfo
    })
    history.push('/checkoutpage')
  }

  return <>
    <form className="add-customer-information-form">
      <input
        required
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)} />

      <input
        required
        placeholder="Street Address"
        value={streetAddress}
        onChange={(event) => setStreetAddress(event.target.value)} />
      <input
        required
        placeholder="City"
        value={city}
        onChange={(event) => setCity(event.target.value)} />
      <input
        required
        placeholder="Zip"
        value={zip}
        onChange={(event) => setZip(event.target.value)} />
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

    <button onClick={handleSubmit}>Next➡️</button>

  </>
}

export default CustomerForm