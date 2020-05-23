import React from 'react'

const Button = (props) => {

    const { changed }=props;

  return <button onClick={changed}>Add </button>
}

export default Button