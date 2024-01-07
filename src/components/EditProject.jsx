import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row,Col } from 'react-bootstrap';
import { BASE_URL } from '../services/baseurl';
import { editProjectAPI } from '../services/allAPI';
import { editProjectResponseContext } from '../contexts/ContextShare';

function EditProject({project}) {

const {editProjectResponse,setEditProjectResponse} = useContext(editProjectResponseContext)

 const [show, setShow] = useState(false);

 const[projectdetails,setProjectDetails] = useState({
              id:project._id,
              title:project.title,
              language:project.language,
              github:project.github,
              website:project.website,
              overview:project.overview,
              projectimage:""

          
            });

            const[preview,setPreiew] = useState("")

  const handleClose = () => setShow(false); 
  const handleShow = () => setShow(true);

  useEffect(()=>{
  if (projectdetails.projectimage) {
   setPreiew(URL.createObjectURL(projectdetails.projectimage)) 
  } },[projectdetails.projectimage])
  
const handleClose1=()=>{
  setProjectDetails({
    id:project._id,
    title:project.title,
    language:project.language,
    github:project.github,
    website:project.website,
    overview:project.overview,
    projectimage:""


  })
  setPreiew("")
}

const handleUpdate = async()=>{
  const{id,title,language,github,website,overview,projectimage} = projectdetails
  if(!title || !language || !github || !website || !overview){
    alert('please fll the form completely')
  }
  else{
    const reqBody = new FormData()
    reqBody.append("title",title)
    reqBody.append("language",language)
    reqBody.append("github",github)
    reqBody.append("website",website)
    reqBody.append("overview",overview)
    preview?reqBody.append("projectimage",projectimage):reqBody.append("projectimage",project.projectimage)

  

  const token =sessionStorage.getItem("token")
  if(preview){
    const reqHeader = {
      "Content-Type" : "multipart/form-data",
      "Authorization" :`Bearer ${token}`
     }
     const result = await  editProjectAPI(id,reqBody,reqHeader)
     console.log(result);
     if(result.status===200){
   alert('updated successfully')
   handleClose()
   setEditProjectResponse(result.data)
   
     }
   else{
    console.log(result.response.data);
   }
    
  }
  else{
    const reqHeader = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };
    const result = await  editProjectAPI(id,reqBody,reqHeader)
     console.log(result);
     if(result.status===200){
      alert('updated successfully')
      handleClose()
      setEditProjectResponse(result.data)

        }
      else{
       console.log(result.response.data);
      }
    }
  }
}
  return (
    <>
          <button onClick={handleShow} className='btn'><i class="fa-solid fa-pen-to-square text-info"></i></button>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
         className='mt-5' >
            <Modal.Header closeButton>
              <Modal.Title>Project Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col md={6}>
                    <label htmlFor="image" className='text-center'>
                        <input id='image' style={{display:'none'}} type='file' onChange={e=>setProjectDetails({...projectdetails,projectimage:e.target.files[0]})}  />
                        <img className='w-100' src={ preview?preview:`${BASE_URL}/uploads/${project.projectimage}`} alt=""  />
                    </label>
                </Col>
                <Col md={6} className='d-flex align-items-center justify-content-center flex-column'>
                     <div className='mb-3 w-100'>
                        <input type="text" className='form-control' placeholder='Project Title ' value={projectdetails.title} onChange={e=>setProjectDetails({...projectdetails,title:e.target.value})} />
                     </div>
    
                     <div className='mb-3 w-100'>
                        <input type="text" className='form-control' placeholder='Project Language' value={projectdetails.language} onChange={e=>setProjectDetails({...projectdetails,language:e.target.value})}   />
                     </div>
    
                     <div className='mb-3 w-100'>
                        <input type="text" className='form-control' placeholder='Project Github Link  '  value={projectdetails.github} onChange={e=>setProjectDetails({...projectdetails,github:e.target.value})}   />
                     </div>
    
                     <div className='mb-3 w-100'>
                        <input type="text" className='form-control' placeholder='Project Website Link '  value={projectdetails.website} onChange={e=>setProjectDetails({...projectdetails,website:e.target.value})}  />
                     </div>
    
                     <div className='mb-3 w-100'>
                        <input type="text" className='form-control' placeholder='Project OverView ' value={projectdetails.overview} onChange={e=>setProjectDetails({...projectdetails,overview:e.target.value})}  />
                     </div>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose1} >
                Clear
              </Button>
              <Button variant="success" onClick={handleUpdate} >Add</Button>
            </Modal.Footer>
          </Modal>
    </>
  )
}

export default EditProject
