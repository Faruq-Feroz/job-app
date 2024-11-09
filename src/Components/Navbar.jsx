import  { useState, useEffect } from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import { FaSearch, FaUser } from 'react-icons/fa';


const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const isScrolled = window.scrollY > 10;
    setScrolled(isScrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar expand="lg" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Navbar.Brand href="#home" className="logo">JobFinder</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto ml-sm-0">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#jobs">Jobs</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>

          {/* Search Bar with Icon inside */}
          <Nav.Item className="search-bar">
            <Form inline className="d-flex">
              <FormControl type="text" placeholder="Search Jobs" className="search-input" />
              <Button variant="outline-success" className="search-button">
                <FaSearch />
              </Button>
            </Form>
          </Nav.Item>

          {/* User Account Dropdown */}
          <NavDropdown title={<FaUser />} id="basic-nav-dropdown" align="end">
            <NavDropdown.Item href="#login">Login</NavDropdown.Item>
            <NavDropdown.Item href="#signup">Sign Up</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
