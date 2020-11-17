import React, { useState, Fragment } from 'react';
import { LinkContainer } from "react-router-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {NavLink, Link} from 'react-router-dom';
import { FaHome, FaSwatchbook, FaPlaceOfWorship } from "react-icons/fa"; 
import {Tooltip} from 'reactstrap';
import './Navbartop.css';
// import { Nav, Navbar, NavItem } from "react-bootstrap";

const Navbartop = (props) => {

  const [tooltipOpenHome, setTooltipOpenHome] = useState(false);
  const [tooltipOpenHome2, setTooltipOpenHome2] = useState(false);
  const [tooltipOpenHome3, setTooltipOpenHome3] = useState(false);
  const toggleMainNavIcons = () => setTooltipOpenHome(!tooltipOpenHome);
  const toggleMainNavIconsHome2=()=>setTooltipOpenHome2(!tooltipOpenHome2);
  const toggleMainNavIconsHome3=()=>setTooltipOpenHome3(!tooltipOpenHome3);

  return (
<Fragment>

    <Navbar bg="light" variant="light" expand="lg" sticky="top">
      <LinkContainer exact to="/">
      <Navbar.Brand >Web You Web</Navbar.Brand>
      </LinkContainer>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
        <Nav className="mr-auto ml-auto" variant="pills">
        {/* <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/home2/">Home2</NavLink></li>
                    <li><NavLink to="/home3/">Home3</NavLink></li>
                </ul> */}
          <LinkContainer exact to="/">
              <Nav.Link className="top-nav-icons" id="top-nav-home-tooltip">
                <FaHome  
                className="top-nav-home-icon"
                // data-toggle="tooltip"
                // data-placement="bottom"
                // title="Home"
            /></Nav.Link>
            </LinkContainer>
            <Tooltip className="tooltip-css" placement="bottom" isOpen={tooltipOpenHome} target="top-nav-home-tooltip" toggle={toggleMainNavIcons}>
        Home
      </Tooltip>
          <LinkContainer  to="/home2">
              <Nav.Link className="top-nav-icons" id="top-nav-home2-tooltip">
                <FaSwatchbook 
                className="top-nav-home2-icon"
                // data-toggle="tooltip"
                // data-placement="bottom"
                // title="Home2"
                /></Nav.Link>
            </LinkContainer>
            <Tooltip className="tooltip-css" placement="bottom" isOpen={tooltipOpenHome2} target="top-nav-home2-tooltip" toggle={toggleMainNavIconsHome2}>
        Home2
      </Tooltip>
          <LinkContainer exact to="/home3">
              <Nav.Link className="top-nav-icons" id="top-nav-home3-tooltip">
                <FaPlaceOfWorship 
                className="top-nav-home3-icon"
                // data-toggle="tooltip"
                // data-placement="bottom"
                // title="Home3"
                /></Nav.Link>
            </LinkContainer>
            <Tooltip className="tooltip-css" placement="bottom" isOpen={tooltipOpenHome3} target="top-nav-home3-tooltip" toggle={toggleMainNavIconsHome3}>
        Home3
      </Tooltip>
          {/* <Nav.Link ></Nav.Link>
          <Nav.Link href="#Home2">Home2</Nav.Link>
          <Nav.Link href="#Home3">Home3</Nav.Link>
          <Nav.Link href="#Home4">Home4</Nav.Link>
          <Nav.Link href="#Home5">Home5</Nav.Link>
          <Nav.Link href="#Home6">Home6</Nav.Link>
          <Nav.Link href="#Home7">Home7</Nav.Link>
          <Nav.Link href="#Home8">Home8</Nav.Link>
          <Nav.Link href="#Home9">Home9</Nav.Link>
          <Nav.Link href="#Home10">Home10</Nav.Link>
          <Nav.Link href="#Home11">Home11</Nav.Link> */}
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
        </Nav>
        
      </Navbar.Collapse>
      
    </Navbar>
    <div className="container" style={{textAlign:"center"}}>
    <a className="covid-19" href="https://coronavirus.jhu.edu/map.html" target="_blank" rel="noopener noreferrer">COVID-19 Updates</a>
    </div>
    </Fragment>


  )
};

export default Navbartop;