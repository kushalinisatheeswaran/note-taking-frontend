import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard"; 
import './App.css';


const App=() => {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path ="/" element ={<Login/>} />
        <Route path ="/login" element ={<Login/>} />
        <Route path ="/profile" element ={<Profile/>} />
        <Route path ="/register" element ={<Register/>} />
        <Route path ="/dashboard" element ={<Dashboard/>} />
        
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;


