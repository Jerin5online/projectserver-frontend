import React, { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import RemoveBgimg from '../Assests/Screenshot 2023-11-04 211612.png'
import Modal from 'react-bootstrap/Modal';
function 
ProjectCard() {
              const [show, setShow] = useState(false);
              const handleClose = () => setShow(false);
              const handleShow = () => setShow(true);


  return (
   <>
   <Card style={{marginLeft:"30px",borderColor:"skyblue"}} className='btn shadow' onClick={handleShow}>
    <Card.Img  variant='top' src={RemoveBgimg}/>
          <Card.Body>
              
              <Card.Title className='text-center'>N E T F L I X</Card.Title>
              
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
          <Modal.Title>N E T F L I X</Modal.Title>
        </Modal.Header>
        <Modal.Body >
         <Row style={{height:"200px"}}>
              <Col md={6}>

              <img src={RemoveBgimg} width={"100%"} alt="" />


              </Col>
              <Col md={6}>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos esse earum corporis. Quos repellat veritatis quis. Unde necessitatibus,</p>
             <p><span className='fw-bolder'>Technologies Used : </span>HTML, CSS, REACT</p>
              </Col>


         </Row>

              <div className='d-flex'>
              <a href="https://github.com/Jerin5online/netflix" target='_blank'><i class="fa-brands fa-github text-white fa-2x ms-5 mt-3"></i></a>
               <a href="https://jerinnetflix.vercel.app/" target='_blank'><i class="fa-solid fa-link fa-2x ms-5 mt-3 text-white "></i></a>



              </div>



        </Modal.Body>
       
      </Modal>











   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   </>
  )
}

export default ProjectCard

