import React from "react";
import "./Popoverbtn.css";
import {
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";
import {
  FaCloudSun,
  FaCloudSunRain,
  FaCloudRain,
  FaCloudMoon,
  FaSun,
} from "react-icons/fa";
import Popoverbtnhourcard from './Popoverbtnhourcard';
import Popoverbtndaycard from './Popoverbtndaycard';

const KELVIN = 273.15;

const key = "f9034a6c94020d9f76bb28cdf288ea27";



const Popoverbtn = ({ lat, long, weatherTemp, weatherFeelsLike, weatherDescription, weatherIconSrc, weatherCity, weatherCountry, weatherForecastList }) => {

  let days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  let d = new Date();
  let dayNumber = d.getDay();
  let dayString = days[dayNumber];


  const weather = {};
  weather.temperature = {
    unit: "celsius"
  };

  //////////////Get Hour and AM PM show/////////////////


  //////////////////////////////////////////////////////
  const filteredweatherForecastList = weatherForecastList.slice(0, 5);
  // console.log('AboofilteredweatherForecastList',filteredweatherForecastList)
  ///////////////////////Hourly Card List Array////////////////
  const wFHourArray = filteredweatherForecastList.map((list, i) => {
    return (
      <Popoverbtnhourcard key={list.dt} forecastTime={list.dt} forecastTemp={list.main.temp} forecastFeelsLike={list.main.feels_like} forecatIcon={list.weather[0].icon} forecastDescription={list.weather[0].description} />
    )
  })

  ////////////////////////////////////////////////////

  ///////////////////////Daily Card List Array////////////////
  const wFDayArray = weatherForecastList.map((listItem, i) => {
    let today = new Date(listItem.dt * 1000);
    let day = today.getDay();
    let daylist = ["Sun", "Mon", "Tue", "Wed ", "Thu", "Fri", "Sat"];

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

    let forecastDay = daylist[day] + " " + hour + prepand
    // console.log(forecastDay)
    let dtDays=[];
    if (forecastDay.includes('11 AM')) {
      dtDays.push(i);
      
      // console.log('dtDays',dtDays)
      return (
        <Popoverbtndaycard key={listItem.dt} forecastDayName={daylist[day]} forecastDayTime={listItem.dt} forecastDayTemp={listItem.main.temp} forecastDayFeelsLike={listItem.main.feels_like} forecatDayIcon={listItem.weather[0].icon} forecastDayDescription={listItem.weather[0].description} />
      )
      
    }


  })



////////////////////////////////////////////////////


return (

  <div className="className">
    {/* <div>{lat}</div>
      <div>{long}</div> */}
    <Button 
      style={{ backgroundColor: "#E9ECEF",fontSize:'12px',padding:'0px' }}
      id="PopoverFocus"
      type="button"
    >
      <div style={{ color: "#209CEE" }}>
        <div>
          <span style={{ color: "#209CEE" }}>{weatherTemp}&deg;</span>

          <span>
            <img style={{ padding: "0",width:"20px" }} src={weatherIconSrc} alt="" />

          </span>
        </div>
        {/* <div><span style={{ color: "#209CEE", marginTop: '0' }}>FL: {weatherFeelsLike}&deg;</span></div> */}

      </div>

      <div style={{ color: "#209CEE" }}>
        {/* {weatherDescription} */}
      </div>
      <div style={{ color: "#209CEE"}}>
        {weatherCity}
      </div>
      <div style={{ color: "#209CEE" }}></div>
    </Button>

    <UncontrolledPopover style={{ padding: "0" }}
      trigger="hover"
      placement="right-end"
      target="PopoverFocus"

    >
      {/* <PopoverHeader>5 hours forecast</PopoverHeader> */}
      <PopoverBody >
        <div
          className="card card-2 new-card "
          style={{ margin: "5px", backgroundColor: "#71C9F8" }}
        >
          <div className="row">
            {wFHourArray}

          </div>
        </div>
        <div
          className="card card-3 new-card"
          style={{ margin: "5px", backgroundColor: "#405D9A" }}
        >
          <div className="row">
{wFDayArray}
          </div>
        </div>
      </PopoverBody>
    </UncontrolledPopover>
  </div>
);

  

 
};

export default Popoverbtn;
