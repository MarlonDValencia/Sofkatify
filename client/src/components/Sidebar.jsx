import '../index.css'
const Sidebar = () => {
  return(
    <>
    <div className="container">
    <div className="row">
    <div className="col-md-3 side-bar p-3 text-white bg-dark" style={{}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <span className="fs-4">"Nombre de usuario"</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#" className="nav-link active" aria-current="page">
          Inicio
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          Tu Biblioteca
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          Tus Artistas
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          Crear playlist
        </a>
      </li>
       <hr/>
       <li>
         <a href="#" className="nav-link text-white">

         </a>
       </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <a>
        <img src="" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>Titulo Cancion</strong>
      </a>
    </div>
  </div>
  </div>
  </div>
    </>
  )
}

export default Sidebar