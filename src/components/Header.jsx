import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header({dashboard}) {
  return (
    <Navbar className='bg-white'>
    <Container>
      <Navbar.Brand href="#home">
    <Link style={{textDecoration:"none"}} to={'/'}>  <i class="fa-solid fa-shield-heart text-dark fs-2 me-1 "></i>{' '}
       <span className='text-dark fs-2 ' > Project Fair</span></Link>
      </Navbar.Brand>
      {
        dashboard && 
<button type="button" class="btn  btn-outline-info text-dark">Logout <i class="fa-solid fa-power-off text-dark "></i> </button>      }
    </Container>
  </Navbar>
    
  )
}

export default Header
