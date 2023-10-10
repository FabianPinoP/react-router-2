import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


import { NavLink } from "react-router-dom";

const NavbarApp = () => {
  const setActiveClass = ({ isActive }) =>
    isActive
      ? "text-warning mt-2 pe-2 text-decoration-none"
      : "text-white mt-2 pe-2 text-decoration-none";
  return (
    <>
      <Navbar expand="lg" className="bg-dark">
        <Container>
          <Navbar.Brand href="#home" className="text-white">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className={setActiveClass}>
                Home
              </NavLink>
              <NavLink to="/about" className={setActiveClass}>
                About
              </NavLink>
              <NavLink to="/login" className={setActiveClass}>
                Login
              </NavLink>
              <NavLink to="/super-admin" className={setActiveClass}>
                Superadmin
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarApp;
