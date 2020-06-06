import React, { useState } from 'react';

import './App.css'
import WeatherCard from './Components/WeatherCard';
import Form from './Components/Form/Form';
import Spinner from './Components/Spinner/Spinner'

function App() {

  const [inputValue, setInputValue] = useState('');
  const [cityWeather, setCityWeather] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=e2d12c1eb1aec9a48de86dc02249f66f`;

  const getCityWeather = async () => {
    try {
      if (inputValue !== '') {
        setLoading(true);
        const response = await fetch(URL);

        if (response.status !== 500) {
          const data = await response.json();
          
          setCityWeather((cityList)=>[data, ...cityList]);
        } else {
          throw Error('Something went wrong.');
        }
      }
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (e) => {
    getCityWeather();
    e.preventDefault();
  };
  const isCityWeatherReady = Object.keys(cityWeather).length !== 0;
  
  const closeWeatherCard = (id) => {
    setCityWeather((list) => {
      list = list.filter((card) => card.id !== id);
      return list;
    });
  };

  return (
    <div className="App">
      <h1> Weather </h1>
      <Form inputValue={inputValue} setInputValue={setInputValue} onSubmit={onSubmit} />
      {isLoading && <Spinner/>}
      {hasError && <p> Something went wrong! </p>}
      {isCityWeatherReady && (
       cityWeather.map((city) => (
        <div key={city.id}>
          <WeatherCard cityWeather={city} closeWeather={closeWeatherCard} />
        </div>
      ))
      )}
    </div>
  );
}

export default App;