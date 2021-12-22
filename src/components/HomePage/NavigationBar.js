import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import {Navbar,Nav,Container,Button} from 'react-bootstrap'
import { AuthContext } from '../../contexts/auth-context';


const NavigationBar = ()=>{
    const authCtx = useContext(AuthContext);
    const logoutHandler = ()=>{
      authCtx.logout();
    }
    return (
      <>
        <Navbar
          collapseOnSelect
          expand='lg'
          bg='light'
          variant='light'
          className='p-2 sticky-top border border-dark'>
          <Container>
            <Navbar.Brand href='#home'>
              <Link to='/'>
                <h2 className='text-primary'>VVIT-CONNECT</h2>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='me-auto'></Nav>
              {!authCtx.isAuthenticated && (
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
              )}

              {authCtx.isAuthenticated && (
                <Nav>
                  <Nav.Link>
                    <Link to='/profile'>
                      <Button variant='primary'>My Profile</Button>
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Button variant='primary' onClick={logoutHandler}>Logout</Button>
                  </Nav.Link>
                </Nav>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
}

export default NavigationBar;