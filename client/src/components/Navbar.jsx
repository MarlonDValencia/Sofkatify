import "../index.css";
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { searchTracks } from "../actions/search";
import Swal from 'sweetalert2'

const Navbar = () => {

  const dispatch = useDispatch()

  const [state, setState] = useState({
    search: "",
    error: false,
    message: ""
  })

  const onSearch = (e) => {
    e.preventDefault()
    if(state.search === ""){
      setState({
        ...state,
        error:true,
        message: "Campo vacío, Intentelo de nuevo"
      })

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: [state.message],
      })
    }else{
      dispatch(searchTracks(state.search))
    }
  }
  
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value,
    })
  }

  return (
    <>
      <div className="TopBar Container">
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand">Sofkatify</a>
            <form onSubmit={onSearch} class="d-flex">
              <input
                name = "search"
                value = {state.search}
                onChange= {onChange}
                class="form-control me-4"
                type="search"
                placeholder="Artistas, canciones o albumes "
                aria-label="Search"
              />
              <button class="btn btn-search" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
