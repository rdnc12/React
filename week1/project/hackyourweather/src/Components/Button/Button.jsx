import React from 'react';

  const Button=({ onSubmit }) => {
  return (
    <button  onClick={onSubmit} type="submit"
    className="searchButton">
      Search
    </button>
  );
}

export default Button;