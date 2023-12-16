import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'

function Project() {
  return (

<>
<Header/>

<div style={{width:"100%",height:"100vh"}}>
<h1 className='text-center mt-5'>All Projects</h1>
<div className='mt-5'><form class="d-flex" >
        <input class="form-control  w-25" style={{marginLeft:"500px"}} type="search" placeholder="Search Using Technologies"/>
        <button class="btn btn-light my-2 my-sm-0 ms-2 text-black" type="submit">Search</button>
      </form></div>

      <Row className=' container-fluid' style={{marginTop:"70px"}}>
<Col sm={12}  md={6} lg={4}>

<ProjectCard/>




</Col>


</Row>


</div>






</>

    )
}

export default Project
