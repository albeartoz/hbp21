import './navbar.css'
import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import logo from '../../favicon.png';

const MyNavbar = () => {
    return (
        <Navbar className="Navbar" expand="lg">
            <Navbar.Brand>
                <Link to="/" style={{ color: '#000' }}>
                    <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />
                
                {' '}CoviDex </Link> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">CDC Guidelines</Nav.Link>
<<<<<<< HEAD
=======
                    <Nav.Link href="https://covid19.who.int/">WHO Dashboard</Nav.Link>
                    <Nav.Link href="https://github.com/albeartoz/hbp21">Source</Nav.Link>
>>>>>>> 1636925c77a01701a645a8c289eb01940da3a7b1
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar;