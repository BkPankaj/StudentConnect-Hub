import './App.css';
import React from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Register from "./pages/register";
import Login from './pages/Login';

function App() {
  return( 
  <BrowserRouter basename='/'> 
  <Routes>
  <Route path="/register" element={<Register/>} />
    <Route path="/" element={<Dashboard/>} />
    <Route path="/login" element={<Login/>} />

  </Routes>
  
   </BrowserRouter> 
   );
}

export default App;
