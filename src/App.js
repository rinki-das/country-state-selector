import React, { useState } from 'react';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'; // Ensure CSS is properly linked

function App() {
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [states, setStates] = useState([]);

  const countries = [
    { value: 'usa', label: 'USA' },
    { value: 'canada', label: 'Canada' },
    { value: 'india', label: 'India' }
  ];

  const statesOptions = {
    usa: [
      { value: 'california', label: 'California' },
      { value: 'texas', label: 'Texas' }
    ],
    canada: [
      { value: 'ontario', label: 'Ontario' },
      { value: 'quebec', label: 'Quebec' }
    ],
    india: [
      { value: 'maharashtra', label: 'Maharashtra' },
      { value: 'tamil nadu', label: 'Tamil Nadu' }
    ]
  };

  const handleCountryChange = selectedOption => {
    setCountry(selectedOption);
    setStates(statesOptions[selectedOption.value] || []);
    setState(null);  // Reset state selection when country changes
  };

  const handleStateChange = selectedOption => {
    setState(selectedOption);
    if (selectedOption) {
        toast(`You selected ${selectedOption.label}`, { position: "top-center" });
    }
  };

  return (
    <div className="App">
      <h1>Select Country and State</h1>
      <Select
        value={country}
        onChange={handleCountryChange}
        options={countries}
        placeholder="Select a country"
        className="Select-container"
      />
      <Select
        value={state}
        onChange={handleStateChange}
        options={states}
        placeholder="Select a state"
        isDisabled={!country}
        className="Select-container"
      />
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;
