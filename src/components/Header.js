import React from "react";
import history from "../utils/history";
import { NavLink } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  const logout = () => {
    localStorage.removeItem("user");
    history.push("/login");
  };
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#">
          <NavLink to="/event/event-list">Event Manager</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text onClick={logout}>Logout</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
