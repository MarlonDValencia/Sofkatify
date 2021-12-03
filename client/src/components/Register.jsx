import "../index.css";
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import { logginUser, createUser } from "../actions/user";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  let navigate = useNavigate();

  const redirect = () => {
    navigate(`/Home`)
  }


  let regex = new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$");
  const dispatch = useDispatch();
  const users = useSelector(state => state.users)

  const [state, setState] = useState({
    username: "",
    password: "",
    email: "",
    mensaje_username: "",
    mensaje_email: "",
    mensaje_password: "",
    error_username: false,
    error_email:false,
    error_password: false,
  })

  const validar = (e) => {
    e.preventDefault()

    if(state.username === ""){
      setState({
        ...state,
        error_username: true,
        mensaje_username: "Hay un campo vacío. Inténtelo de nuevo", 
      })
    }else if(state.username.length < 3 && state.username.length > 0){
      setState({
        ...state,
        error_username: true,
        mensaje_username: "El nombre de usuario debe tener mínimo 3 letras. Inténtelo de nuevo", 
      })
    }else{
      setState({
        ...state,
        error_username: false
      })
    }
    
    if(state.password === ""){
      setState({
        ...state,
        error_password: true,
        mensaje_password: "Hay un campo vacío. Inténtelo de nuevo", 
      })
    }else if(state.password.length < 3 && state.password.length > 0){
      setState({
        ...state,
        error_password: true,
        mensaje_password: "La contraseña debe tener mínimo 3 letras. Inténtelo de nuevo", 
      })
    }else{
      setState({
        ...state,
        error_password: false
      })
    }

    if(state.email === ""){
      setState({
        ...state,
        error_email: true,
        mensaje_email: "Hay un campo vacío. Inténtelo de nuevo", 
      })
    }else if(!regex.exec(state.email)){
      setState({
        ...state,
        error_email: true,
        mensaje_email: "La estructura del el email no es válida. Inténtelo de nuevo", 
      })
    }else{
      setState({
        ...state,
        error_email: false
      })
    }
    if(!state.error_username && !state.error_email && !state.error_password){
      if(users.length>0){
        users.forEach(user => {
          if(user.username === state.username && user.email === state.email){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'El usuario ya se encuentra registrado',
            })
          }else{
            let usuario = {
              "id": null,
              "username": state.username,
              "password": state.password,
              "email" : state.email,
            }
            dispatch(createUser(usuario))
            dispatch(logginUser(usuario))
            redirect()
            Swal.fire({
              icon: 'success',
              title: 'Registro exitoso!',
              text: `Bienvenido ${state.username}`,
            })
          }
        })
      }else{
        let usuario = {
          "id": null,
          "username": state.username,
          "password": state.password,
          "email" : state.email,
        }
        dispatch(createUser(usuario))
        dispatch(logginUser(usuario))
        redirect()
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso!',
          text: `Bienvenido ${state.username}`,
        })
      }
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
        <h1 className="form-title text">Registrar Nuevo Usuario</h1>
        <input onChange = {onChange} value = {state.username} name="username" className="form-control" type="text" placeholder="Nombre de usuario" />
        {state.error_username === true ? (
                    <span style={{color: "red", fontSize: "12px"}}>{state.mensaje_username}</span>
                ) : null}
        <input onChange = {onChange} value = {state.email} name="email" className="form-control" type="text" placeholder="Correo Electronico" />
        {state.error_email === true ? (
                    <span style={{color: "red", fontSize: "12px"}}>{state.mensaje_email}</span>
                ) : null}
        <input onChange = {onChange} value = {state.password} name="password" className="form-control" type="password" placeholder="Contraseña" />
        {state.error_password === true ? (
                    <span style={{color: "red", fontSize: "12px"}}>{state.mensaje_password}</span>
                ) : null}
        <button
        className="btn boton-login"
        type="submit "
        >
          Crear usuario
          </button>
      </form>
      </div>
    </>
  );
};

export default Login;
