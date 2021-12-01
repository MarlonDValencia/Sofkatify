import "../index.css";

const Login = () => {
  return (
    <>
    <div className="Login-div animated fadeInUp">
      <form action="#" className="form-box">
        <h1 className="form-title text">Iniciar Sesión</h1>
        <input className="form-control" type="text" placeholder="Nombre de usuario" />
        <input className="form-control" type="password" placeholder="Contraseña" />
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
