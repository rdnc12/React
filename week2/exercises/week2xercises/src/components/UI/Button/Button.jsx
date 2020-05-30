//jshint esversion: 6 
import React from 'react';

import classes from "./Button.module.css";

 const Button=({ onClick,title }) =>{

  return (
    <div>
      <button className={classes.Button} onClick={onClick}>
        Get a {title}
      </button>
    </div>
  );
}

export default Button;