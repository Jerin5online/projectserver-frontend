import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      style={{ width: "100%", height: "300px",marginTop:"200px"}}
      className="d-flex justify-content-center align-items-center flex-column "
    >
      <div className="footer d-flex justify-content-evenly align-items-center w-100">
        <div className="website" style={{ width: "400px" }}>
          <h4><i class="fa-solid fa-house fs-4 me-1 mt-4"></i> COMPANY NAME</h4>
          <p className="text-white">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            repellendus harum provident perferendis dolo numquam aliquam sequi
            expedita omnis nesciunt, ipsam, vel id!
          </p>
        </div>
        <div className="links d-flex flex-column mt-5">
          <h6>LINKS</h6>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>Home Page</Link>
          <Link to={"/login"} style={{ textDecoration: "none", color: "white" }} > {" "} Login  </Link>
          <Link to={"/project"} style={{ textDecoration: "none", color: "white" }} > {" "}  Project </Link>
          <Link to={"/register"}style={{ textDecoration: "none", color: "white" }}> {" "}Register</Link>
          <Link to={"/dashboard"} style={{ textDecoration: "none", color: "white" }}  > {" "} Dashboard </Link>
        </div>
        <div className="guides d-flex flex-column">
          <h6>GUIDES</h6>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}> React </Link>
          <Link to={"https://react-bootstrap.netlify.app/"}style={{ textDecoration: "none", color: "white" }}> React Bootstrap </Link>
          <Link to={"https://bootswatch.com/"}style={{ textDecoration: "none", color: "white" }}>Bootswatch</Link>
        </div>
        <div className="contact mt-5">
          <h6 className="mb-3 mt-4 ">CONTACT US</h6>
          <div className="d-flex mb-4 flex-column">
            <p className="text-white"> {" "}<i class="fa-solid fa-location-dot me-1"></i> NewYork</p>
            <p className="text-white">{" "}<i class="fa-solid fa-phone me-1"></i> +91 973554174</p>
            <p className="text-white">{" "}<i class="fa-solid fa-envelope me-1"></i>{" "}jerinsebastian123@gmail.com</p>
          </div>
          <div className="icons  d-flex justify-content-evenly mt-3"></div>
        </div>
      </div>

      <p className="mt-3">Copyright 2023 Project-fair. Built with react.</p>
    </div>
  );
}

export default Footer;
