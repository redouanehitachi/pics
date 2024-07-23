import React, { useState } from 'react'

export default function SearchBar({ onSubmit }) {
  const [terme, setTerme] = useState('');
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(terme);
  };
  const handleChange = (event) => {
    setTerme(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} >
        <input type="text"
          value={terme}
          onChange={handleChange} />
      </form>
    </div>

  )
}
