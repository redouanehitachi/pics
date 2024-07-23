import React, { useState } from 'react'
import './SearchBar.css';
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
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit} >
        <label htmlFor="">Enter Search Term</label>
        <input type="text"
          value={terme}
          onChange={handleChange} />
      </form>
    </div>

  )
}
