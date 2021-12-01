import '../index.css'
const Sidebar = () => {
  return(
    <>
    <div className="sidebar">
      <div className="logo_content">
        <div className="logo">
        <i className='bx bx-music' ></i>
          <div className="logo_name">
            Sofkatify
          </div>
        </div>
        <i class='bx bx-menu' id="btn">
        </i>
      </div>
      <ul className="navlist list-group">

        <li>
        <i class='bx bxs-user'>
        <span>Username</span>
        </i>
        {/*<span className="tooltip"></span>*/}
        </li>

        <li>
        <a href="">
        <i class='bx bxs-microphone-alt' >
        <span>Mis Canciones</span>
        </i>
        </a>
        {/*<span className="tooltip"></span>*/}
        </li>
        <li>
        <a href="">
        <i class='bx bxs-album' >
        <span>Mis Albumes</span>
        </i>
        </a>
        {/*<span className="tooltip"></span>*/}
        </li>
        <li>
        <a href="">
        <i class='bx bxs-playlist' >
        <span>Mis Playlist</span>
        </i>
        </a>
        {/*<span className="tooltip"></span>*/}
        </li>
        <hr />
        <li>
        <a href="">
        <i class='bx bxs-playlist' >
        <span>Crear playlist</span>
        </i>
        </a>
        {/*<span className="tooltip"></span>*/}
        </li>
        <hr />
      </ul>
      <div className="profile_content">
        <div className="profile">
          <div className="profile_details">
            <img src="profile jpg" alt="" className=""/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Sidebar