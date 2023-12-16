import React from "react";
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function Profile() {
const [open, setOpen] = useState(false);
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
          <input id="profile" type="file" style={{ display: "none" }} />
          <img  
            src="https://cdn-icons-png.flaticon.com/512/3135/3135823.png"
            alt="no image"
            style={{ width: "200px", height: "200px",marginLeft:"70px" }}
          />
        </label>
        <input type="text" placeholder="Github" className="form-control mt-3" />
        <input
          type="text"
          placeholder="LinkedIn"
          className="form-control mt-3"
        />
        <button type="button" className="btn btn-warning mt-3 text-dark">
          Update
        </button>
      </div>
      </Collapse>
    </div>
  );
}

export default Profile;
