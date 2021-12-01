import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import React from "react";
import { Route } from 'react-router-dom';
import LandingPage from "./components/LandingPage";


function App() {
  return (
    <>
    <Navbar/>
    <Sidebar/>
    <Login/>
    <Footer/>
    </>
  )
}

export default App;
