import React, { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import RemoveBgimg from '../Assests/Screenshot 2023-11-04 211612.png'
import Modal from 'react-bootstrap/Modal';
import { BASE_URL } from '../services/baseurl';
function 
ProjectCard({project}) {
              const [show, setShow] = useState(false);
              const handleClose = () => setShow(false);
              const handleShow = () => setShow(true);


  return (
   <>
   <Card  style={{borderColor:"skyblue",width:"18rem"}} className='btn shadow mt-5' onClick={handleShow}>
    <Card.Img  variant='top'  height={"250px"} src={project?`${BASE_URL}/uploads/${project.projectimage}`:RemoveBgimg}/>
          <Card.Body>
            
              <Card.Title className='text-center'>{project.title}</Card.Title>
              
              </Card.Body>    
              
              
</Card>


<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body >
         <Row style={{height:"200px"}}>
              <Col md={6}>

              <img src={project?`${BASE_URL}/uploads/${project.projectimage}`:RemoveBgimg} width={"100%"} alt="" />


              </Col>
              <Col md={6}>
                <h4>Discription</h4>
             <p>{project.overview}</p>
             <p><span className='fw-bolder'>Technologies Used : </span>{project.language}</p>
              </Col>


         </Row>

              <div className='d-flex'>
              <a href={project.github} target='_blank'><i class="fa-brands fa-github text-white fa-2x ms-5 mt-3"></i></a>
               <a href={project.website} target='_blank'><i class="fa-solid fa-link fa-2x ms-5 mt-3 text-white "></i></a>



              </div>



        </Modal.Body>
       
      </Modal>











   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   </>
  )
}

export default ProjectCard

