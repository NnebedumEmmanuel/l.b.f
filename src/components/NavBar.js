import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./Navbar.css"
import { Navbar, Container, Nav, } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import Logo from "../Assets/img/lb-logo.jpg"
function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <Navbar bg="success" data-bs-theme="dark">
        <Container className='Fluid mx-0'>
          <Navbar.Brand href="#home" className='Justify-content-start'>
          <img src={Logo} alt="" width="35" height="30" className='rounded-pill nav-logo'/>
          LBF
          </Navbar.Brand>

          <Nav className=" d-flex  justify-content-end">
          <li className="nav-item"><NavLink to="/" className="nav-link" activeClassName="active"  onClick={handleClick}>Home</NavLink></li>
            
            <li activeClassName="active" className='nav-item '><NavLink  to="Sermons" className="nav-link">Sermons</NavLink></li>
           <li className="nav-item"> <NavLink to="About" className="nav-link">About</NavLink></li>
           <li className="nav-item"> <NavLink to="Contact" className="nav-link">Contact</NavLink></li>
              
  
          </Nav>
        </Container>
      </Navbar> 
    </>
  );
}

export default NavBar;