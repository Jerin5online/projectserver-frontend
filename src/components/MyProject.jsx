import React, { useContext, useEffect, useState } from "react";
import AddProject from "./AddProject";
import { deleteProjectAPI, userProjectAPI } from "../services/allAPI";
import { addProjectResponseContext, editProjectResponseContext } from "../contexts/ContextShare";
import EditProject from "./EditProject";

function MyProject() {
 const  {editProjectResponse,setEditProjectResponse} = useContext(editProjectResponseContext)
 const {addProjectResponse,setAddProjectResponse} = useContext(addProjectResponseContext)

  const[usrProject,setUsrProject]=useState([])
  const userProject = async () => {
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };

    

    const result = await userProjectAPI(reqHeader);
    console.log(result.data);
    console.log(result.data);
    setUsrProject(result.data)
  };

  useEffect(() => {
    userProject();
  }, [addProjectResponse,editProjectResponse]);

  const handleDelete = async(id)=>{
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };
    const result =await deleteProjectAPI(id,reqHeader)
    console.log(result);
    if (result.status===200) {
      userProject()
      
    }
    else{
      console.log(result.response.data);
    }

  }

  return (
    <div className="card shadow2 p-5 border-white ">
      <div className="d-flex justify-content-between">
        <h2 className="text-white">My Projects</h2>
        <AddProject />
      </div>

      <div className='mt-4'>
    {  usrProject?.length>0?
    usrProject?.map((item)=>(<div className='border d-flex align-items-center p-2 rounded'>
    <h5>{item.title}</h5>
    <div className='ms-auto d-flex'>
      <EditProject project={item}/>
    <a href={item.github} target='_blank' className='btn'><i class="fa-brands fa-github text-success "></i></a>
    <button onClick={()=>handleDelete(item._id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
    </div>
 </div>))
    :
      <p className='text-danger fw-bolder fs-5 mt-3'>No Project uploaded Yet !!</p>}
    </div>
    </div>
  );
}

export default MyProject;
