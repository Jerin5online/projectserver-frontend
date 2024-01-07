import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Footer from "./components/Footer";
import Auth from "./components/Auth";
import { isAuthTokenContext } from "./contexts/ContextShare";
import { useContext } from "react";

function App() {
  const {isAuthToken,setIsAuthToken} = useContext(isAuthTokenContext)
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth register />} />
        <Route path="/dashboard" element={isAuthToken? <Dashboard dashboard/> :<Home/>} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
