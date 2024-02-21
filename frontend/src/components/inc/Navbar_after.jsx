import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

function Navbarbefore() {
  return (
    <Navbar id="header" className="header d-flex align-items-center" collapseOnSelect fixed='top' expand='sm' variant='dark'>
      <Container fluid >
        <Link href="/" className="logo d-flex align-items-center">
          <img src={Logo} alt="Logo" />
        </Link>
        <Navbar.Toggle aria-controls='navbarScroll'  />
        <Navbar.Collapse id='navbarScroll' className="justify-content-end">
          <Nav>
            <Nav.Link href='/' className="lines mx-auto">
              <div>Home</div>
            </Nav.Link>
            <Nav.Link href='/Indicators' className="lines mx-auto"><div>Indicators</div></Nav.Link>
            <Nav.Link href='/sector' className="lines mx-auto"><div>Sectors</div></Nav.Link>
            <Nav.Link href='/Occupation' className="lines mx-auto"><div>Occupation</div></Nav.Link>
            <Nav.Link href='/key-facts' className="lines mx-auto"><div>Key Facts</div></Nav.Link>
            <Nav.Link href='/Data' className="lines mx-auto"><div>Data Insights</div></Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown" className="mx-auto">
              <NavDropdown.Item href="/job-statistics">NELEX Jobs Statistics</NavDropdown.Item>
              <NavDropdown.Item href="https://nelexnigeria.com"> Find Jobs</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/trending-jobs' className="mx-auto">Trending Jobs </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {/* <style>
        {`
          .lines {
            text-align: center !important;
          }
        `}
      </style> */}
    </Navbar>
  );
}

export default Navbarbefore;
