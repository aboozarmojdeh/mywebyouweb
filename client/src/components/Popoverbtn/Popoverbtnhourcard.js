import React from 'react';
// import {
//   FaCloudSun,
//   FaCloudSunRain,
//   FaCloudRain,
//   FaCloudMoon,
//   FaSun,
// } from "react-icons/fa";




const Popoverbtnhourcard = ({ forecastTime, forecastTemp, forecastFeelsLike, forecatIcon, forecastDescription }) => {


  let today = new Date(forecastTime * 1000);
  let day = today.getDay();
  let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
  // console.log("Today is : " + daylist[day] + ".");
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let prepand = (hour >= 12) ? " PM " : " AM ";
  hour = (hour >= 12) ? hour - 12 : hour;
  if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
      hour = 12;
      prepand = ' Noon';
    }
    else {
      hour = 12;
      prepand = ' PM';
    }
  }
  if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
      hour = 12;
      prepand = ' Midnight';
    }
    else {
      hour = 12;
      prepand = ' AM';
    }
  }
  // console.log("Current Time : " + hour + prepand + " : " + minute + " : " + second);
  const KELVIN = 273.15;
  let temperature = Math.floor(forecastTemp - KELVIN)
  let feelsTemp = Math.floor(forecastFeelsLike - KELVIN)
let weatherForecastIcon="http://openweathermap.org/img/w/" + forecatIcon + ".png";


  return (
    <div className="col" style={{ color: "white",margin:'0 15px' }}>
      <div className="row row1" style={{ color: "white" }}>
        {temperature}&deg;
                </div>
                <div className="row row1">Feels like: {feelsTemp}&deg;</div>
      <div className="row row2">
        
        <span>
          <img src={weatherForecastIcon} alt="" />
            
          </span>
        {/* <img
                  className="img-fluid"
                  src="https://img.icons8.com/ios/100/000000/sun.png"
                  alt=""
                /> */}
      </div>
     
      <div className="row row3">{hour}</div>
      <div className="row row4">{prepand}</div>
      <div className="row row5">{forecastDescription}</div>
    </div>
  )
};

export default Popoverbtnhourcard;

