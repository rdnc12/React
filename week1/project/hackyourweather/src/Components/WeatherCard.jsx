import React from 'react';

const WeatherCard=(props)=> {
  const { weather } = props;
  return (
      <div className="card">
        <h4>
          {weather.city}
        </h4>
        <h6> {weather.main} </h6>
      
        <p> min temp: {weather.temp_min} </p>
        <p> max temp: {weather.temp_max} </p>
        <p>
          location: {weather.location}
        </p>
      </div>
    
  );
}

export default WeatherCard;