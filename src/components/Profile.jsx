import React, { useEffect } from "react";
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { editProfileAPI } from "../services/allAPI";
import { BASE_URL } from "../services/baseurl";
import Swal from "sweetalert2";


function Profile() {

const [open, setOpen] = useState(false);
const [isUpdate,setIsUpdate] = useState(false)
//state to hold the value

const [userProfile,setUserProfile] =useState({

username:"",
email:"",
password:"",
github:"",
linkedin:"",
profile:""


})

//once an image is uploaded then that image will be stored in existing image

const[existingImage,setExistingImage] = useState("")

//to hold the url of the new image
const[preview,setPreview]=useState("")

useEffect(()=>{
  const user = JSON.parse(sessionStorage.getItem("existingUser"))

  setUserProfile({...userProfile,username:user.username,email:user.email,password:user.password,github:user.gitHub,linkedin:user.LinkedIn
    ,profile:""})
  setExistingImage(user.profile)},[isUpdate])

useEffect(()=>
  {
    if(userProfile.profile){
      console.log(URL.createObjectURL(userProfile.profile));
    setPreview(URL.createObjectURL(userProfile.profile))
  }
  else{
    setPreview("")
  }
},[userProfile.profile])




const handleProfileUpdate = async()=>{
  const{username,email,password,github,linkedin,profile} = userProfile
  if(!github || !linkedin){
    Swal.fire({
      title: "Incomplete Form !",
      text: "Please fill in the form",
      icon: "error",
    });
  

}
else{
  const reqBody = new FormData()
  reqBody.append("username",username)
  reqBody.append("email",email)
  reqBody.append("password",password)
  reqBody.append("github",github)
  reqBody.append("linkedin",linkedin)
  preview?reqBody.append("profile",profile):reqBody.append("profile",existingImage)

const token = sessionStorage.getItem("token")
if(preview){
  const reqHeader = {
    "Content-Type" : "multipart/form-data",
    "Authorization" :`Bearer ${token}`
   }
   const result = await editProfileAPI(reqBody,reqHeader)
   console.log(result);
   if(result.status ===200){
    Swal.fire({
      title: "Profile Update Successfully",
      text: "Please fill in the form",
      icon: "success",
    });
    sessionStorage.setItem("existingUser",JSON.stringify(result.data))
    setIsUpdate(true)

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
  const result = await editProfileAPI(reqBody,reqHeader)
   console.log(result);
   if(result.status ===200)
   {
    Swal.fire({
      title: "Profile Update Successfully",
      text: "Please fill in the form",
      icon: "success",
    });
    sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
    setIsUpdate(true)

   }
   else{
console.log(result.response.data);

   }
}

}
}

  return (
    <div className="card shadow p-5 border-white " style={{marginBottom:"50px"}}>
      <div className="d-flex justify-content-between">
        <h3 className="text-white"> Profile</h3>
        <button onClick={() => setOpen(!open)} className="btn ">
          <i class="fa-solid fa-arrow-up-from-bracket fa-rotate-180 ms-auto"></i>
        </button>
      </div>
      <Collapse in={open}>
      <div className="row justify-content-center">
        <label htmlFor="profile" >
          <input id="profile" type="file" style={{ display: "none" }}   onChange={(e)=>setUserProfile({...userProfile,profile:e.target.files[0]})}/>
         { existingImage==""? <img  
            src={ preview?preview:"https://cdn-icons-png.flaticon.com/512/3135/3135823.png"}
            alt="no image" className="rounded circle"
            style={{ width: "200px", height: "200px",marginLeft:"70px" }}
          />: <img  
          src={ preview?preview:`${BASE_URL}/uploads/${existingImage}`}
          alt="no image"
          style={{ width: "200px", height: "200px",marginLeft:"70px",borderRadius:"50%" }}
        />
        
        
        }
        </label>
        <input type="text" placeholder="Github" className="form-control mt-3" value={userProfile.github} onChange={(e)=>setUserProfile({...userProfile,github:e.target.value})}/>
        <input value={userProfile.linkedin} onChange={(e)=>setUserProfile({...userProfile,linkedin:e.target.value})}
          type="text"
          placeholder="LinkedIn"
          className="form-control mt-3"
        />
        <button onClick={handleProfileUpdate} type="button" className="btn btn-warning mt-3 text-dark">
          Update
        </button>
      </div>
      </Collapse>
    </div>
  );
}

export default Profile;
