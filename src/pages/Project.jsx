import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import { allProjectAPI } from '../services/allAPI'

function Project() {

const[allproject,setAllProject]=useState([])
const[searchkey,setSearchKey]=useState([""])
const[istoken,setIsToken]=useState(false)
console.log(searchkey);

  const getAllProjects = async()=>{
    // e.preventDefault()

    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type" : "application/json",
        "Authorization" :`Bearer ${token}`
      }
      const result =await allProjectAPI(reqHeader,searchkey)
      console.log(result.data);
      setAllProject(result.data)
    }
  }

  useEffect(()=>{
  getAllProjects()
  },[searchkey])

  useEffect(()=>{
   if (sessionStorage.getItem("token")) {
    setIsToken(true)
   }
   else{
    setIsToken(false)
   }
  },[])



  return (
  
<>
<Header/>

<div style={{width:"100%",height:"auto"}}>
<h1 className='text-center mt-5'>All Projects</h1>
<div className='mt-5'><form class="d-flex" >
        <input value={searchkey} onChange={(e)=>setSearchKey(e.target.value)} class="form-control  w-25" style={{marginLeft:"500px"}} type="search" placeholder="Search Using Technologies"/>
        <button  class="btn btn-light my-2 my-sm-0 ms-2 text-black" type="submit">Search</button>
      </form></div>

      <Row className=' container-fluid' style={{marginTop:"70px"}}>
{allproject?.length>0?
allproject.map((item)=>( <Col sm={12}  md={6} lg={4}>

  <ProjectCard project={item} /> 
  
  
  
  
  </Col>))
 
: <div>{istoken? <p>Sorry No Such Projects Avilable</p>:
  <div className='d-flex justify-content-center align-items-center flex-column '>
<img src="https://cdn.dribbble.com/users/89373/screenshots/4937800/dribbble_padlock_shot.gif" alt="" />
<h3>Please<span className='text-danger'> Login </span>to continue</h3>

</div>  }</div>
}

</Row>



</div>






</>

    )
}

export default Project
