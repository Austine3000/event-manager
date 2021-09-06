import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#">
          <NavLink to="/event/event-list">Event Manager</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Logout</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
