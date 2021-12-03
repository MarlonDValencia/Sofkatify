import "../index.css";
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import { logginUser } from "../actions/user";
import { getAllPlaylistsUser } from "../actions/playlist";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  
  let navigate = useNavigate();

  const redirect = () => {
    navigate(`/Register`)
  }

  const redirectHome = () => {
    navigate(`/Home`)
  }



  const dispatch = useDispatch();
  const users = useSelector(state => state.users)

  const [state, setState] = useState({
    username: "",
    password: "",
    mensaje: "",
    error: false,
  })

  const validar = (e) => {
    e.preventDefault()

    if(state.username === "" || state.password === ""){
      setState({
          ...state,
          error: true,
          mensaje: "Hay un campo vacío. Inténtelo de nuevo"
      })
  }else if(state.username.length < 3 && state.username.length > 0){
      setState({
          ...state,
          error: true,
          mensaje: "El nombre de usuario debe tener mínimo 3 letras. Inténtelo de nuevo"
      })
  }else{
      setState({
          ...state,
          onEditar: true,
          error: false
        })
        }

    let match = false
    var id = 0
    var usuario = {}
    users.forEach(user => {
      if(user.username === state.username && user.password === state.password){
        match = true
        id = user.id
        usuario = user
      }
    });
    if(match){
      Swal.fire({
        icon: 'success',
        title: 'Inicio de sesión exitoso!',
        text: `Bienvenido ${state.username}`,
      })
      dispatch(logginUser(usuario))
      dispatch(getAllPlaylistsUser(id))
      redirectHome()
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
    <div className="Login-div animated fadeInUp" style={{marginTop: "230px"}}>
      <form onSubmit={validar} action="#" className="form-box">
        <h1 className="form-title text">Iniciar Sesión</h1>
        <input onChange = {onChange} value = {state.username} name="username" className="form-control" type="text" placeholder="Nombre de usuario" />
        {state.error === true ? (
                    <span style={{color: "red", fontSize: "12px"}}>{state.mensaje}</span>
                ) : null}
        <input onChange = {onChange} value = {state.password} name="password" className="form-control" type="password" placeholder="Contraseña" />
        <button
        className="btn boton-login mx-2"
        type="submit "
        >
          Iniciar Sesión
          </button>
          <button onClick={redirect} className="btn boton-register mt-3">Registrar usuario</button>
      </form>
      </div>

    </>
  );
};

export default Login;
