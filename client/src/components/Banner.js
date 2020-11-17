import React from 'react';

const Banner=(props)=>{
    return(
        <div>
             <a href='https://www.google.com' target='_blank' rel='noopener noreferrer'>
                  <div className='webflow-banner'>
                    <img src="" width="25px" height="25px" alt="" />
                    <div className='banner-text'>{props.bannerText}</div>
                  </div>
                </a>
        </div>
    )
}



export default Banner;