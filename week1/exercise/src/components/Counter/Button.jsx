import React from 'react'

const Button = (props) => {

    const { onButtonClicked }=props;

  return <button onClick={onButtonClicked}>Add </button>
}

export default Button