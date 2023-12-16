import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import MyProject from '../components/MyProject'
import Profile from '../components/Profile'

function Dashboard() {

const[username,setUsername]=useState("")
useEffect(()=>{
  setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username)
},[])
console.log(username);




  return (
    <>
    <Header dashboard />
    <h3 className='mt-5 ms-5 text-warning'>Welcome <span className='text-info'>{username}</span></h3>

    <Row className='container-fluid mt-5'>
      <Col md={8}>
        <MyProject/>
      <div>



      </div>
     </Col>
     <Col md={4}>
    <Profile/>
     </Col>
    </Row>
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Dashboard
