import React from 'react';
import './Catcard.css';


// function randRGBGenerator(){
// let R = Math.floor(Math.random() * 256);
//     let G = Math.floor(Math.random() * 256);
//     let B = Math.floor(Math.random() * 256);
//     const bgColor = "rgb(" + R + "," + G + "," + B + ")";
//     return bgColor
// };

// contrast color generator
function rgbToYIQ({r, g, b}) {
  return ((r * 299) + (g * 587) + (b * 114)) / 1000;
}

function hexToRgb(hex) {
  if (!hex || hex === undefined || hex === '') {
    return undefined;
  }

  const result =
        /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : undefined;
}

function contrast(colorHex, threshold = 128) {
  if (colorHex === undefined) {
    return '#000';
  }

  const rgb = hexToRgb(colorHex);

  if (rgb === undefined) {
    return '#000';
  }

  return rgbToYIQ(rgb) >= threshold ? '#000' : '#fff';
}


function handleClick(e) {
  e.preventDefault();
  console.log('The link was clicked.');
}

//////////////////////





const Catcard=(props)=>{


  function randBGenerator(){
    const bgColor=Math.floor(Math.random()*16777215).toString(16);
    return '#'+bgColor
  }
  
  const randColor=randBGenerator();


    return(

<div className='col-md-4 col-sm-6 col-12'>
                      <div className='card'>
                        <a className='card-link' href={`https://${props.website}`} target='_blank' rel="noopener noreferrer">
                          <div id='bgColor' className="card-box card-header" style={{ backgroundColor: randColor}}>
                            <img src={`https://robohash.org/set_set4/${props.id}?200x200`} className="card-image" width="30" loading="lazy" alt={props.name} />
                            <div>
                             
                              <h6 style={{color:contrast(randColor)}}>{props.name}</h6>
                              <small style={{color:contrast(randColor)}}>{props.companyName}</small>
                            </div>

                          </div>
                        </a>
                        <div className='card-body'>
                          <p className="card-text">{props.description}</p>
                        </div>
                      </div>
                    </div>

    )

};

export default Catcard;