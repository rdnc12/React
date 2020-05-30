//jshint esversion: 6 
// jshint esversion:8
import React, { useState } from 'react';

import Spinner from '../UI/Spinner/Spinner'
import Button from './Button/Button';
import DogPhoto from './DogPhoto/DogPhoto';

const DogGallery=() =>{
  
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [dogPhotos, setDogPhotos] = useState([]);

  const getDogPhoto = async () => {

    try {
      setLoading(true);
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      if (response.ok) {
        const data = await response.json();
        setDogPhotos((prevState) => [...prevState, data.message]);
      } else {
        throw Error('Something went wrong while fetching!');
      }
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1> Exercise 2 - Dog Photo Gallery </h1>
      {dogPhotos.length === 0 ? (
        <h2>Get your first dog by clicking the button!</h2>
      ) : (
        dogPhotos.map((URL, index) => (
          <div key={index}>
            <DogPhoto url={URL} />
          </div>
        ))
      )}

      {isLoading && <Spinner/>}
      {hasError && <p> Something went wrong! </p>}
      <Button onClick={getDogPhoto}/>
    </div>
  );
}

export default DogGallery;