import React, { Component } from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";

class NavbarComponent extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">NBA Legends</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Data</Nav.Link>
            <Nav.Link href="#pricing">Case Study</Nav.Link>
            <NavDropdown title="Players" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Michael Jordan
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Magic Johnson
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Larry Bird</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                LeBron James
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">About</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarComponent;
