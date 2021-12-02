import "../index.css";
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import { logginUser } from "../actions/user";

const Login = () => {
  
  const dispatch = useDispatch();
  const users = useSelector(state => state.users)

  const [state, setState] = useState({
    username: "",
    password: "",
  })

  const validar = (e) => {
    e.preventDefault()
    let match = false
    users.forEach(user => {
      if(user.username === state.username && user.password === state.password){
        match = true
      }
    });
    if(match){
      Swal.fire({
        icon: 'success',
        title: 'Inicio de sesión exitoso!',
        text: `Bienvenido ${state.username}`,
      })

      dispatch(logginUser())
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario o contraseña incorrecta',
      })
    }
  }

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value,
    }
    )
    console.log(""+ e.target.name + " " + e.target.value)
  }

  return (
    <>
    <div className="Login-div animated fadeInUp">
      <form onSubmit={validar} action="#" className="form-box">
        <h1 className="form-title text">Iniciar Sesión</h1>
        <input onChange = {onChange} value = {state.username} name="username" className="form-control" type="text" placeholder="Nombre de usuario" />
        <input onChange = {onChange} value = {state.password} name="password" className="form-control" type="password" placeholder="Contraseña" />
        <button
        className="btn boton-login"
        type="submit "
        >
          Iniciar Sesión
          </button>
      </form>
      </div>
    </>
  );
};

export default Login;
