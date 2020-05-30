import React from 'react';

  const Button=({ onSubmit }) => {
  return (
    <button  onClick={onSubmit} type="submit">
      Search
    </button>
  );
}

export default Button;