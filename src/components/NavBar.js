import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav, NavLink,} from "react-bootstrap";
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
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
          </Nav>
        </Container>
      </Navbar> 
    </>
  );
}

export default NavBar;