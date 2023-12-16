import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import titleImage from '../Assests/man-4365597_1920.png'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'

function Home() {

  const[islogin,setIsLogin] = useState(false)

  useEffect(()=>{
  if(sessionStorage.getItem("token")){
    setIsLogin(true)

  }
  },[])
  console.log(islogin);


  return (
   <>
   <div style={{width:"100%",height:"100vh"}}>
   <div className="row">
    <div className='container-fluid rounded'>

      <Row style={{marginTop:"160px"}} >
  <Col sm={12} md={6} className='p-5 mt-5'>

    <h1 style={{fontSize:"80px",color:"white",marginLeft:"50px"}}>Project Fair</h1>
  <p style={{color:"white",marginLeft:"50px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porr, fugiat tempora temporibusiat?</p>
  {islogin?
  <Link to={'/dashboard'} style={{marginLeft:"50px"}} type="button" class="btn btn-outline-info">Manage Project  <i class="fa-solid fa-arrow-right"></i>   </Link>:
  <Link to={'/login'} style={{marginLeft:"50px"}} type="button" class="btn btn-outline-info">Get Started <i class="fa-solid fa-arrow-right"></i>   </Link>
}
  
 
  </Col>
  <Col sm={12} md={6}>
  
  <img src={titleImage} alt="" className='w-50 ' style={{marginLeft:"110px",marginBottom:"200px"}}  />
  
  
  </Col>
  </Row>



    </div>



   </div>


   </div>




<div className='all_projects mt-5 ' >
    <h1 className='text-center mt-5'>All Projects</h1>
    <marquee scrollAmount ={20} className="mt-5" >
    <div className='d-flex'>
      <div style={{width:'300px'}}>
      <ProjectCard/>
      </div>
      <div style={{width:'300px'}}>
        <ProjectCard/>
      </div>
      <div style={{width:'300px'}}>
        <ProjectCard/>
      </div>
    </div>

    </marquee>

    <div className='text-center'>
  <Link to={'/project'}> <button type="button" class="btn btn-info mt-3">See More Projects</button> </Link>


    </div>

  </div>


   
   
   
   
   
   </>
  )
}

export default Home
