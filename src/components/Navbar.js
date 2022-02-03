import React from 'react';
import {Navbar as Navigationbar,Nav, Container} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
function Navbar() {
  return(
    
        <Navigationbar sticky="top" className="text-white custom-navbar mb-5">
            <Container>
            <Nav>
                <Navigationbar.Brand className="fw-bold text-white" href="/">WPhoto</Navigationbar.Brand>
            </Nav>
            <Nav >
                <Nav.Link className="text-white" >
                    About
                </Nav.Link >
                <Nav.Link className="text-white" href="/favorite">
                    Favorite
                </Nav.Link >
            </Nav>
            </Container>
        </Navigationbar>
    
  ) 
}

export default Navbar;
