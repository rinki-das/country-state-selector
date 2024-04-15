import React, { useState } from 'react';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [states, setStates] = useState([]);

  const countries = [
    { value: 'usa', label: 'USA' },
    { value: 'canada', label: 'Canada' }
  ];

  const statesOptions = {
    usa: [
      { value: 'california', label: 'California' },
      { value: 'texas', label: 'Texas' }
    ],
    canada: [
      { value: 'ontario', label: 'Ontario' },
      { value: 'quebec', label: 'Quebec' }
    ]
  };

  const handleCountryChange = selectedOption => {
    setCountry(selectedOption);
    setStates(statesOptions[selectedOption.value] || []);
    setState(null);
  };

  const handleStateChange = selectedOption => {
    setState(selectedOption);
    toast(`You selected ${selectedOption.label}`);
  };

  return (
    <div className="App">
      <h1>Select Country and State</h1>
      <Select
        value={country}
        onChange={handleCountryChange}
        options={countries}
        placeholder="Select a country"
      />
      <Select
        value={state}
        onChange={handleStateChange}
        options={states}
        placeholder="Select a state"
        isDisabled={!country}
      />
      <ToastContainer />
    </div>
  );
}

export default App;
