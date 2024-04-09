import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Logo/Logo';
import '../NavBar/navbar.css';
import CartIcon from '../CartIcon/CartIcon';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Header() {
  const [expanded, setExpanded] = useState(false);

  const closeNavbar = () => setExpanded(false);

  return (
    <Navbar expand="xl" className="navBar dark fixed-top" data-bs-theme="light" expanded={expanded}>
      <Container className='mobileContainerNav'>
        <Logo className='logo' />
        <div className="mobileContainerNavRight">
          <CartIcon className="mobile" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navLinks" onSelect={closeNavbar}>
            <Link to="/" className="primary bold" onClick={closeNavbar}>Inicio</Link>
            <div className="supremeContainer">
              <NavDropdown className='Dropdown'>
                <Link to='/marca/supreme/categoria/7000puff'><span>7000 Puffs</span></Link>
                <Link to='/marca/supreme/categoria/7500puff'><span>7500 Puffs</span></Link>
              </NavDropdown>
              <Link to="/marca/supreme/" className="primary" onClick={closeNavbar}>Supreme</Link>
            </div>
            <div className="bangContainer">
              <NavDropdown className='Dropdown'>
                <Link to='/marca/bang/categoria/7000puff'><span>7000 Puffs</span></Link>
                <Link to='/marca/bang/categoria/7500puff'><span>7500 Puffs</span></Link>
              </NavDropdown>
              <Link to="/marca/bang" className="primary" onClick={closeNavbar}>BANG</Link>
            </div>
          </Nav>
        </Navbar.Collapse>
        <div className="desktopContainerNavRight">
          <CartIcon className="desktop" />
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;

