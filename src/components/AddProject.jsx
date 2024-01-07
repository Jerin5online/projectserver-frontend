
import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row,Col } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { addProjectAPI } from '../services/allAPI';
import { addProjectResponseContext } from '../contexts/ContextShare';


function AddProject() {
  const {addProjectResponse,setAddProjectResponse}= useContext(addProjectResponseContext)

  //to hold the value of the image URL

  const[preview,setPreview] = useState("")

  

  const[projectdetails,setProjectDetails] = useState({
    title:"",
    language:"",
    github:"",
    website:"",
    overview:"",
    projectimage:""

  });
  console.log(projectdetails);



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 const[token,setToken] =useState("")
  const handleClose1 = () =>{
   setProjectDetails({
    title:"",
   language:"",
   github:"",
   website:"",
   overview:"",
   projectimage:""}) 

   setPreview("")
  }
 useEffect(()=>{
  if (projectdetails.projectimage) {
    setPreview(URL.createObjectURL(projectdetails.projectimage))
  }
  
 },[projectdetails.projectimage])
 console.log(preview);

 useEffect(()=>{
  if(sessionStorage.getItem("token")){
    setToken(sessionStorage.getItem("token"))
  }
  else{
    setToken("")
  }
 },[])
//add project


 const handleAdd = async(e)=>{
  e.preventDefault()
  const{title,language,github,website,overview,projectimage} = projectdetails

  if(!title || !language || !github || !website || !overview || !projectimage){
    Swal.fire({
      title: "Please fill in the form Completly",
      icon: "error",
    });  }
  else{
    //req body 
    //1)create object for form data- since we have upload content

    const reqBody = new FormData()

    //2)add data to form data - append()

    reqBody.append("title",title)
    reqBody.append("language",language)
    reqBody.append("github",github)
    reqBody.append("website",website)
    reqBody.append("overview",overview)
    reqBody.append("projectimage",projectimage)

  if(token) {const reqHeader = {
    "Content-Type" : "multipart/form-data",
    "Authorization" :`Bearer ${token}`
   }
   const result = await addProjectAPI(reqBody,reqHeader)
   console.log(result);
   if(result.status===200){
   console.log(result.data);
   Swal.fire({
    title: "Succesfully ADDED !",
    icon: "success",
  });  
  handleClose1()
  handleClose()
  setAddProjectResponse(result.data)
   }
   else{
    Swal.fire({
      title: result.response.data,
      icon: "error",
    });
     console.log(result.response.data);
   }
  }
}
 }
  return (
    <>

    <Button variant="info" onClick={handleShow}>
            Add Project
          </Button>
    
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
                        <input id='image' style={{display:'none'}} type='file' onChange={(e)=>setProjectDetails({...projectdetails,projectimage:e.target.files[0]})} />
                        <img className='w-100' src={preview?preview:"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX60212294.jpg"} alt=""  />
                    </label>
                </Col>
                <Col md={6} className='d-flex align-items-center justify-content-center flex-column'>
                     <div className='mb-3 w-100'>
                        <input type="text" className='form-control' placeholder='Project Title ' value={projectdetails.title} onChange={(e)=>setProjectDetails({...projectdetails,title:e.target.value})}   />
                     </div>
    
                     <div className='mb-3 w-100'>
                        <input type="text" className='form-control' placeholder='Project Language'  value={projectdetails.language} onChange={(e)=>setProjectDetails({...projectdetails,language:e.target.value})}  />
                     </div>
    
                     <div className='mb-3 w-100'>
                        <input type="text" className='form-control' placeholder='Project Github Link  '  value={projectdetails.github} onChange={(e)=>setProjectDetails({...projectdetails,github:e.target.value})}  />
                     </div>
    
                     <div className='mb-3 w-100'>
                        <input type="text" className='form-control' placeholder='Project Website Link '  value={projectdetails.website} onChange={(e)=>setProjectDetails({...projectdetails,website:e.target.value})} />
                     </div>
    
                     <div className='mb-3 w-100'>
                        <input type="text" className='form-control' placeholder='Project OverView '  value={projectdetails.overview} onChange={(e)=>setProjectDetails({...projectdetails,overview:e.target.value})} />
                     </div>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose1}>
                Clear
              </Button>
              <Button variant="success" onClick={handleAdd}>Add</Button>
            </Modal.Footer>
          </Modal>
        </>
  )
}

export default AddProject
