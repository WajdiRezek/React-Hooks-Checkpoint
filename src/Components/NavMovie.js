import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const NavMovie=()=>{
  return(
    <Navbar bg="Red" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><h1>🎬 MovieApp</h1></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link ><Link to='/'>Home</Link> </Nav.Link> 
            <Nav.Link ><Link to='/ListMovie'>Movies</Link> </Nav.Link> 
          </Nav>
        </Container>
      </Navbar>

  )
}
    

export default NavMovie;