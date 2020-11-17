import React from "react";
import './Carddeck.css';

const Carddeck = ({newsTitle,newsName,newsDescription,newsImage}) => {
  return (
    
      
      <div class="card">
        <img class="card-img-top" src={newsImage} alt="" />
        <div class="card-body">
          <h5 class="card-title">{newsTitle}</h5>
          <p class="card-text">
            {newsDescription}
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">{newsName}</small>
        </div>
      
      </div>
    
    
  );
};

export default Carddeck;
