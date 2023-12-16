import React from 'react'
import AddProject from './AddProject';

function MyProject() {
  return (
  <div className='card shadow2 p-5 border-white '>
               <div className="d-flex justify-content-between">
                <h2 className='text-white'>My Projects</h2>  
                <AddProject/>          
               </div>

               <div className='mt-4 text-white'>
           <div>
           <div class="form-group">
  <label class="col-form-label col-form-label-lg mt-4 ms-1" for="inputLarge">Project Title</label>
  <input class="form-control form-control-lg" type="text" placeholder="Project Title" id="inputLarge"/>

 
</div>
<div className='ms-sort d-flex mt-1'>
 <button className='btn'><i class="fa-brands fa-github text-info mt fa-lg"></i> </button>
 <button className='btn'> <i class="fa-solid fa-pen-to-square text-warning"></i></button>
 <button className='btn'><i class="fa-regular fa-trash-can text-danger"></i> </button>
 </div>
           </div>

           <h4 className='mt-2 ms-1'>No Project Uploaded Yet !!</h4>

               </div>
  </div>
  )
}

export default MyProject
