import React, { useEffect, useState } from "react";
import { Button, Navbar, Nav, NavDropdown } from "react-bootstrap";
const HeaderComponent: React.FC<Props> = (props) => {
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src="img/_myicon.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            style={{marginRight:"5px",borderRadius:"50%"}}
          />
      mogami.dev</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/work">Work</Nav.Link>
            <Nav.Link href="/terminal">Terminal</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
type Props = {};
export default HeaderComponent;
