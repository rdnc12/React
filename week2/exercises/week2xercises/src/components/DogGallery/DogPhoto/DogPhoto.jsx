//jshint esversion: 6 
import React from 'react';

const DogPhoto=({ url }) =>{
  return <img src={url} alt="dog picture" height="250" width="400"/>;
}

export default DogPhoto;