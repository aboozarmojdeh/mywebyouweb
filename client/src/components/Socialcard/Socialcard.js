import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card, Tooltip  } from 'reactstrap';
// import React from "react";
// // import ReactDOM from "react-dom";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGoogle,
  FaYahoo,
  FaLinkedinIn,
  FaUserCircle
} from "react-icons/fa";
import "./Socialcard.css";

// const Socialcard = () => {
//   return (
//     <div className='social-container'>
//       <a className='social-links'
//         href="https://www.facebook.com/"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <FaFacebookF
//           className="facebook"
//           data-toggle="tooltip"
//           data-placement="top"
//           title="Facebook"
//         />
//       </a>

//       <a className='social-links' href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
//         <FaTwitter
//           className="twitter"
//           data-toggle="tooltip"
//           data-placement="top"
//           title="Twitter"
//         />
//       </a>

//       <a
//       className='social-links'
//         href="https://www.instagram.com/"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <FaInstagram
//           className="instagram"
//           data-toggle="tooltip"
//           data-placement="top"
//           title="Instagram"
//         />
//       </a>

//       <a
//       className='social-links'
//         href="https://www.gmail.com/"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <FaGoogle
//           className="gmail"
//           data-toggle="tooltip"
//           data-placement="top"
//           title="Gmail"
//         />
//       </a>

//       <a
//       className='social-links'
//         href="https://mail.yahoo.com/"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <FaYahoo
//           className="yahoo"
//           data-toggle="tooltip"
//           data-placement="top"
//           title="Yahoo Mail"
//         />
//       </a>

//       <a
//       className='social-links'
//         href="https://www.linkedin.com/"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <FaLinkedinIn
//           className="linkedin"
//           data-toggle="tooltip"
//           data-placement="top"
//           title="Linkedin"
//         />
//       </a>
//     </div>
//   );
// };

// export default Socialcard;



const Socialcard = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleMainButton = () => setTooltipOpen(!tooltipOpen);

  return (
    <div>
      <Button id="social-button" color="primary" onMouseOver={toggleMainButton} onClick={toggle} style={{ marginBottom: '1rem' }}>
      <Tooltip placement="left" isOpen={tooltipOpen} target="social-button" toggle={toggleMainButton}>
        Social Button
      </Tooltip>
      <FaUserCircle />
      </Button>
      <Collapse isOpen={isOpen}>
        <Card style={{width:'40px'}}>
          <CardBody >

          <ul className='original-style'>

            <li><a className=''
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
       <FaFacebookF
          className="facebook"
          data-toggle="tooltip"
          data-placement="top"
          title="Facebook"
        />
      </a></li>

            <li> <a className='' href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
       <FaTwitter
          className="twitter"
          data-toggle="tooltip"
          data-placement="top"
          title="Twitter"
        />
      </a></li>
            <li> <a
      className=''
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram
          className="instagram"
          data-toggle="tooltip"
          data-placement="top"
          title="Instagram"
        />
      </a></li>

            <li> <a
      className=''
        href="https://www.gmail.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGoogle
          className="gmail"
          data-toggle="tooltip"
          data-placement="top"
          title="Gmail"
        />
      </a></li>

            <li> <a
      className=''
        href="https://mail.yahoo.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYahoo
          className="yahoo"
          data-toggle="tooltip"
          data-placement="top"
          title="Yahoo Mail"
        />
      </a></li>
            <li>  <a
      className=''
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn
          className="linkedin"
          data-toggle="tooltip"
          data-placement="top"
          title="Linkedin"
        />
      </a></li>
        
          </ul>
          
    

          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Socialcard;