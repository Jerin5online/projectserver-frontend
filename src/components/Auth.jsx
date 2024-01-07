import React, { useContext, useState } from "react";
import lgpic from "../Assests/20602935_6333204-removebg-preview.png";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI, registerAPI } from "../services/allAPI";
import Swal from "sweetalert2";
import { isAuthTokenContext } from "../contexts/ContextShare";

function Auth({ register }) {

  const {isAuthToken,setIsAuthToken} = useContext(isAuthTokenContext)
  //create a state to ghold the value of ser registration details

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const registerForm = register ? true : false;
  console.log(userData);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const { username, email, password } = userData;
    if (!username || !email || !password) {
      Swal.fire({
        title: "Incomplete Form !",
        text: "Please fill in the form",
        icon: "error",
      });
    } else {
      const result = await registerAPI(userData);
      console.log(result.data);
      if (result.status === 200) {
        Swal.fire({
          title: "Succesfully Registerd !",
          text: `${result.data.username} is succesfully registerd`,
          icon: "success",
        });

        setUserData({
          username: "",
          email: "",
          password: "",
        });

        //navigate to login
        navigate("/login");
      } else {
        alert(result.response.data);
      }
    }
  };

  //funtion to login

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = userData;
    if (!email || !password) {
      Swal.fire({
        title: "Incomplete Form !",
        text: "Please fill in the form",
        icon: "error",
      });
    } else {

      //API call
      
      const result = await loginAPI(userData);
      console.log(result);
      if (result.status === 200) {

        //alert

        Swal.fire({
          title: "Succesfully Login !",
          text: `${result.data.existingUser.username} is succesfully Logined`,
          icon: "success",
        }); 
        setIsAuthToken(true)

        //store

        sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token",result.data.token)

        //state empty

        setUserData({
          email: "",
          password: ""
        });

        //navigate to homepage
        
        navigate("/");
      }
       else {
 Swal.fire({
          title: `${result.response.data}`,
          icon: "error",
        });       }
    }
  };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        {" "}
        <i class="fa-solid fa-arrow-left ms-1 mt-4 ms-4"></i> Back to Home{" "}
      </Link>

      <div
        className="card bg-info p-5 rounded w-75 h-75 "
        style={{ marginLeft: "180px", marginTop: "70px" }}
      >
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img
              className="mt-5 mb-5 ms-5"
              src={lgpic}
              width={"80%"}
              alt="no image"
            />
          </div>

          <div className="col-lg-6">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <h1 className="text-white ms-5" style={{}}>
                {" "}
                <i class="fa-solid fa-shield-heart text-white fs-2 me-1 "></i>{" "}
                Project Fair
              </h1>

              <h5 className="ms-5 text-dark">
                {registerForm? "Sign Up to Your Account" : "Sign in to Your Account"}
              </h5>
              <Form>
                {registerForm && (
                  <Form.Group
                    className="mb-3 mt-3 ms-5"
                    controlId="formBasicEmail"
                  >
                    <Form.Label className="text-white">
                      Enter Username
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Username"
                      value={userData.username}
                      onChange={(e) =>
                        setUserData({ ...userData, username: e.target.value })
                      }
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>
                )}
                <Form.Group
                  className="mb-3 mt-3 ms-5"
                  controlId="formBasicEmail"
                >
                  <Form.Label className="text-white">
                    Enter E-mail Id
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter E-mail Id"
                    value={userData.email}
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                  />
                  <Form.Text className="text-dark">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group
                  className="mb-3 mt-2 ms-5"
                  controlId="formBasicEmail"
                >
                  <Form.Label className="text-white">Enter Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    value={userData.password}
                    onChange={(e) =>
                      setUserData({ ...userData, password: e.target.value })
                    }
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                {registerForm ? (
                  <div className="mt-4 ms-5">
                    <button
                      onClick={(e) => handleRegister(e)}
                      type="button"
                      class="btn btn-warning"
                    >
                      Register
                    </button>
                    <p className="text-white mt-2">
                      Already a User? Click here to{" "}
                      <Link
                        to={"/login"}
                        style={{ color: "blue", textDecoration: "none" }}
                      >
                        Login
                      </Link>{" "}
                    </p>
                  </div>
                ) : (
                  <div className="mt-4 ms-5">
                    <button
                      onClick={(e) => handleLogin(e)}
                      type="button"
                      class="btn btn-secondary "
                    >
                      Login
                    </button>
                    <p className="text-white mt-3">
                      New User ? Click here to{" "}
                      <Link
                        to={"/register"}
                        style={{ color: "blue", textDecoration: "none" }}
                      >
                        Register
                      </Link>
                    </p>
                  </div>
                )}
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
