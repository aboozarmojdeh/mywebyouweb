import React from 'react';

const Popoverbtndaycard=({ forecastDayTime, forecastDayName,forecastDayTemp, forecastDayFeelsLike, forecatDayIcon, forecastDayDescription })=>{
    
    const KELVIN = 273.15;
  let temperature = Math.floor(forecastDayTemp - KELVIN)
  let feelsTemp=Math.floor(forecastDayFeelsLike - KELVIN)
let weatherForecastIcon="http://openweathermap.org/img/w/" + forecatDayIcon + ".png";

    return(

        <div className="col">
        <div className="row row1">{temperature}&deg;</div>
        <div className="row row1">Feels like: {feelsTemp}&deg;</div>
        <div className="row row2">
        <span>
          <img src={weatherForecastIcon} alt="" />
            
          </span>
          
        </div>
        <div className="row row3">{forecastDayName}</div>
        <div className="row row5">{forecastDayDescription}</div>
      </div>
      
    )
};

export default Popoverbtndaycard;


