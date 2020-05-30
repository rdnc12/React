import React from 'react';

const Input=({ inputValue, setInputValue }) =>{
    
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };
  return (
    <input
      name="searchInput"
      type="search"
      placeholder="Search City"
      onChange={handleChange}
      value={inputValue}
      required
    />
  );
}

export default Input;