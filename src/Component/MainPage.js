
import React from "react";
import {Link , Outlet} from 'react-router-dom';
import { Nav,Container,Navbar,NavDropdown } from "react-bootstrap";

function MainPage(){
    return(

        <div className="ccontainer">
             <>
             <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">TECHBUZZ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="my-2">
           
            <Nav.Link> <Link to="/">Home</Link></Nav.Link> 
            <Nav.Link><Link to="/About">About</Link></Nav.Link>
            <Nav.Link>  <Link to="/Contact">Contact</Link></Nav.Link>
            
          
           
            
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
    </>

        </div>
    );
}
export default MainPage;