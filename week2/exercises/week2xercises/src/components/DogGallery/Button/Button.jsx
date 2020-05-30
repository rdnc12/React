//jshint esversion: 6 
import React from 'react';

import classes from "./Button.module.css";

 const Button=({ onClick }) =>{

  return (
    <div>
      <button className={classes.Button} onClick={onClick}>
        Get a dog photo
      </button>
    </div>
  );
}

export default Button;