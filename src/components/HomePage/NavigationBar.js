import React from 'react'
import { Link } from 'react-router-dom';
import {Navbar,Nav,Container,Button} from 'react-bootstrap'

const styles = {
  textDecoration:"none",
  color:"white"
}

const NavigationBar = ()=>{
    return (
      <>
        <Navbar collapseOnSelect expand='lg' bg='light' variant='light' className='p-2'>
          <Container>
            <Navbar.Brand href='#home'>
              <Link to='/'>
                <h2 className='text-primary'>VVIT-CONNECT</h2>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='me-auto'></Nav>
              <Nav>
                <Nav.Link>
                  <Link to='/register'>
                    <Button variant='primary'>Register</Button>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='/login'>
                    <Button variant='primary'>Login</Button>
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
}

export default NavigationBar;