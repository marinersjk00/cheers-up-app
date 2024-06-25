import React, { useState } from 'react';

const IngredientForm = () => {
  const [textInput, setTextInput] = useState('');

  const handleSubmit = async (e) => {
    console.log('Submitting text:', textInput); // Assuming textInput holds the data
    e.preventDefault();
    const serializedBody = JSON.stringify(textInput);
    const fetchOptions = {
        method: 'POST',
        body: serializedBody
    };

    
      fetch('http://localhost:5173/process-ingredient-form', fetchOptions);
  
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        placeholder="Enter your text"
        rows={4}
        cols={50}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default IngredientForm;