import React from "react";
import "./Weathercard.css";
import { FaCloudRain } from "react-icons/fa";

const Weathercard = () => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let d = new Date();
  let dayNumber = d.getDay();
  let dayString = days[dayNumber];
  // let todayDate=new Date().toDateString();
  return (
    <div className="container new-container">
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12">
        <div className="card card-1 new-card">
          <div className="row">
            <div className="col-sm-8">
              <div className="temp">23&deg;</div>
              <div className="location">Toronto, Canada</div>
              <div className="location">Today: {dayString}</div>
            </div>
            <div className="col-sm-4">
              <img
                className="img-fluid"
                src="https://img.icons8.com/plasticine/100/000000/sun.png"
                alt=""
              />
            </div>
          </div>
        </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
        <div className="card card-2 new-card">
          <div className="row">
            <div className="col">
              <div className="row row1">21&deg;</div>
              <div className="row row2">
                <img
                  className="img-fluid"
                  src="https://img.icons8.com/ios/100/000000/sun.png"
                  alt=""
                />
              </div>
              <div className="row row3">12:00</div>
              <div className="row row4">PM</div>
            </div>
            <div className="col">
              <div className="row row1">20&deg;</div>
              <div className="row row2">
                <img
                  className="img-fluid"
                  src="https://img.icons8.com/ios/100/000000/sun.png"
                  alt=""
                />
              </div>
              <div className="row row3">1:00</div>
              <div className="row row4">PM</div>
            </div>
            <div className="col">
              <div className="row row1">20&deg;</div>
              <div className="row row2">
                <img
                  className="img-fluid"
                  src="https://img.icons8.com/windows/100/000000/cloud.png"
                  alt=""
                />
              </div>
              <div className="row row3">2:00</div>
              <div className="row row4">PM</div>
            </div>
            <div className="col">
              <div className="row row1">19&deg;</div>
              <div className="row row2">
                <img
                  className="img-fluid"
                  src="https://img.icons8.com/windows/100/000000/cloud.png"
                  alt=""
                />
              </div>
              <div className="row row3">3:00</div>
              <div className="row row4">PM</div>
            </div>
            <div className="col">
              <div className="row row1">18&deg;</div>
              <div className="row row2">
                <img
                  className="img-fluid"
                  src="https://img.icons8.com/cotton/64/000000/rain--v3.png"
                  alt=""
                />
              </div>
              <div className="row row3">4:00</div>
              <div className="row row4">PM</div>
            </div>
          </div>
        </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
        <div className="card card-3 new-card">
          <div className="row">
            <div className="col">
              <div className="row row1">21&deg;</div>
              <div className="row row2">
                <img
                  className="img-fluid"
                  src="https://img.icons8.com/ios/100/000000/sun.png"
                  alt=""
                />
              </div>
              <div className="row row3">Mon</div>
            </div>
            <div className="col">
              <div className="row row1">20&deg;</div>
              <div className="row row2">
                <img
                  className="img-fluid"
                  src="https://img.icons8.com/ios/100/000000/sun.png"
                  alt=""
                />
              </div>
              <div className="row row3">Tue</div>
            </div>
            <div className="col">
              <div className="row row1">16&deg;</div>
              <div className="row row2">
                <img
                  className="img-fluid"
                  src="https://img.icons8.com/windows/100/000000/cloud.png"
                  alt=""
                />
              </div>
              <div className="row row3">Wed</div>
            </div>
            <div className="col">
              <div className="row row1">17&deg;</div>
              <div className="row row2">
                <img
                  className="img-fluid"
                  src="https://img.icons8.com/windows/100/000000/cloud.png"
                  alt=""
                />
              </div>
              <div className="row row3">Thu</div>
            </div>
            <div className="col">
              <div className="row row1">18&deg;</div>
              <div className="row row2">
                <img
                  className="img-fluid"
                  src="https://img.icons8.com/cotton/64/000000/rain--v3.png"
                  alt=""
                />
              </div>
              <div className="row row3">Fri</div>
            </div>
          </div>
        </div>
        </div>
        </div>
        {/* <div class="card-group"> */}

       
        {/* </div> */}
        
    </div>
  );
};

export default Weathercard;
