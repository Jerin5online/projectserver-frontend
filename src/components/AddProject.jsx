
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row,Col } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { addProjectAPI } from '../services/allAPI';


function AddProject() {

  const[preview,setPreview] = useState("")

  const[projectdetails,setProjectDetails] = useState({
    title:"",
    language:"",
    githublink:"",
    websitelink:"",
    overview:"",
    projectImg:""

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
   githublink:"",
   websitelink:"",
   overview:"",
   projectImg:""}) 

   setPreview("")
  }
 useEffect(()=>{
  if (projectdetails.projectImg) {
    setPreview(URL.createObjectURL(projectdetails.projectImg))
  }
  
 },[projectdetails.projectImg])
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
  const{title,language,githublink,websitelink,overview,projectImg} = projectdetails

  if(!title || !language || !githublink || !websitelink || !overview || !projectImg){
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
    reqBody.append("githublink",githublink)
    reqBody.append("websitelink",websitelink)
    reqBody.append("overview",overview)
    reqBody.append("projectImg",projectImg)

  if(token) {const reqHeader = {
    "Content-Type" : "multipart/form-data",
    "Authorization" :`Bearer" ${token}`
   }
   const result = await addProjectAPI(reqBody,reqHeader)
   console.log(result);
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
                        <input id='image' style={{display:'none'}} type='file' onChange={(e)=>setProjectDetails({...projectdetails,projectImg:e.target.files[0]})} />
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
                        <input type="text" className='form-control' placeholder='Project Github Link  '  value={projectdetails.githublink} onChange={(e)=>setProjectDetails({...projectdetails,githublink:e.target.value})}  />
                     </div>
    
                     <div className='mb-3 w-100'>
                        <input type="text" className='form-control' placeholder='Project Website Link '  value={projectdetails.websitelink} onChange={(e)=>setProjectDetails({...projectdetails,websitelink:e.target.value})} />
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
