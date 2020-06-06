import React from 'react';

const WeatherCard=(props)=> {
  const { cityWeather, closeWeather }=props;
  const {
    id,
    name,
    sys: { country },
    weather,
    main: { temp_min, temp_max },
    coord: { lon, lat },
  } = cityWeather;
  const { main, description } = weather[0];
  return (
    <div>
      <div className="card">
        <div
          className="close"
          onClick={() => {
            closeWeather(id);
          }}
        >
          X
        </div>
        <h4>
          {name}, {country}
        </h4>
        <h6> {main} </h6>
        <p> {description} </p>
        <p> min temp: {temp_min} </p>
        <p> max temp: {temp_max} </p>
        <p>
          location: {lon}, {lat}
        </p>
      </div>
    </div>
  );
}

export default WeatherCard;