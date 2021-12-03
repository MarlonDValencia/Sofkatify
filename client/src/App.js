import React, { useState, useEffect } from 'react';
import { getAllUsers } from "./actions/user";
import { useDispatch, useSelector } from 'react-redux';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Register from "./components/Register";
import PlaylistView from "./components/PlaylistView";
import UserLibrary from "./components/UserLibrary";
import LandingPage from "./components/LandingPage";
import SearchPage from "./components/SearchPage";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const loggin = useSelector(state => state.loggin)

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Register" element={<Register />} />

        <Route exact path="/Home" element={
          <>
            <Navbar />
            <div className="container">
              <div className="row">
                <div className="col-md-2">
                  <Sidebar />
                </div>
                <div className="col-md-10">
                  <LandingPage />
                </div>
              </div>
            </div>
          </>
        } />

        <Route exact path="/Search" element={
          <>
            <Navbar />
            <div className="container">
              <div className="row">
                <div className="col-md-2">
                  <Sidebar />
                </div>
                <div className="col-md-10">
                  <SearchPage />
                </div>
              </div>
            </div>
          </>
        } />
        <Route exact path="/Library" element={
          <>
            <Navbar />
            <div className="container">
              <div className="row">
                <div className="col-md-2">
                  <Sidebar />
                </div>
                <div className="col-md-10">
                  <UserLibrary />
                </div>
              </div>
            </div>
          </>
        } />
      </Routes>
    </>
  )
}

export default App;
