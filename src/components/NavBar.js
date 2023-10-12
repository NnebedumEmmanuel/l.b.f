import 'bootstrap/dist/css/bootstrap.css';
import "./Navbar.css"
import { Navbar, Container, Nav, } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import Logo from "../Assets/img/lb-logo.jpg"
function NavBar() {
  return (
    <>
      <Navbar bg="success" data-bs-theme="dark">
        <Container className='Fluid mx-0'>
          <Navbar.Brand href="#home" className='Justify-content-start mx-5'>
          <img src={Logo} alt="" width="35" height="30" className='rounded-pill'/>
          LBF
          </Navbar.Brand>

          <Nav className=" d-flex  justify-content-end">
            <NavLink index>Home</NavLink>
            <NavLink to="Sermons">Sermons</NavLink>
            <NavLink to="About">About</NavLink>
            <NavLink to="Contact">Contact</NavLink>
              
  
          </Nav>
        </Container>
      </Navbar> 
    </>
  );
}

export default NavBar;