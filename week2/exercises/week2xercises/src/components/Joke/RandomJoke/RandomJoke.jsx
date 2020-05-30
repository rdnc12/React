import React, { useState } from 'react';

import Joke from '../Joke';
import Button from '../../UI/Button/Button';
import Spinner from '../../UI/Spinner/Spinner'

export default function RandomJoke() {

 
  const [hasError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [joke, setJoke] = useState({});

  const getRandomJoke = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      if (response.ok) {
        const data = await response.json();
        setJoke({ setup: data.setup, punchline: data.punchline });
      } else {
        throw Error('Something went wrong!');
      }
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h1>Exercise 3 - Get Random Joke</h1>
      <Button title="random joke" onClick={getRandomJoke} />
      {isLoading && <Spinner/>}
      {hasError && <p> Something went wrong! </p>}
      {!isLoading && !hasError && <Joke setup={joke.setup} punchline={joke.punchline} />}
    </div>
  );
}