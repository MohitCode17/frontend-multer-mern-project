import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" style={{backgroundColor: "#F9ED69"}}>
      <Container>
        <NavLink to="/" className="fs-4 fw-bold text-decoration-none">MernAPP</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className="text-dark text-decoration-none mx-4">Home</NavLink>
            <NavLink to="/register" className="text-dark text-decoration-none">Add Profile</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;