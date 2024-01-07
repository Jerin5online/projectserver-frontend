import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthTokenContext } from '../contexts/ContextShare';

function Header({dashboard}) {
  const {isAuthToken,setIsAuthToken} = useContext(isAuthTokenContext)

  const navigate = useNavigate()

const handleLogout = () =>{
  sessionStorage.removeItem("token")
  sessionStorage.removeItem("existingUser")
  setIsAuthToken(false)
  //navigate to homepage
  navigate('/')
}

  return (
    <Navbar className='bg-white'>
    <Container>
      <Navbar.Brand href="#home">
    <Link style={{textDecoration:"none"}} to={'/'}>  <i class="fa-solid fa-shield-heart text-dark fs-2 me-1 "></i>{' '}
       <span className='text-dark fs-2 ' > Project Fair</span></Link>
      </Navbar.Brand>
      {
        dashboard && 
        <button onClick={handleLogout} type="button" class="btn  btn-outline-info text-dark">Logout <i class="fa-solid fa-power-off text-dark "></i> </button> 
    }
    </Container>
  </Navbar>
    
  )
}

export default Header
