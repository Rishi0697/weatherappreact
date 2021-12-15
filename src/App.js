import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Registration from './Component/Registration';
import Login from './Component/Login';
import Validate from "./Component/Validate";

function App() {
  return (
    <>
    <Routes>
      <Route exact path ="/" element={<Registration/>}/>
      <Route exact path ="/registration" element={<Login/>}/>
      <Route exact path ="/validate" element={<Validate/>}/>
      <Route path="*" element={<Navigate to="/"/>}/>
      
    </Routes>
    
    </>
  );
}

export default App;
