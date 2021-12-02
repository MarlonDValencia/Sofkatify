import '../index.css'
const SearchPage = () => {
  return(
    <>
    <div className="container" style={{marginTop: "70px"}}>
      <h1 className="text-white">Resultados de la busqueda "Busqueda"</h1>
      <hr />
      <h3 className="text-white">Canciones</h3>
      <hr />
      <div className="SongList">
      <div className="container">
        <div className="row">
        <div className="card mx-2 my-2" style={{ width: "18rem" }}>
            <img src="https://http2.mlstatic.com/D_NQ_NP_638132-MLM43571734909_092020-O.jpg" className="card-img-top" style={{width: "150px", height:"150px"}}/>
            <div className="card-body">
              <h5 className="card-title">Track.name</h5>
              <a href="#" className="btn">
              <i class='bx bxs-album' />
                Play
              </a>
            </div>
          </div>
          <div className="card mx-2 my-2" style={{ width: "18rem" }}>
            <img src="https://http2.mlstatic.com/D_NQ_NP_638132-MLM43571734909_092020-O.jpg" className="card-img-top" style={{width: "150px", height:"150px"}}/>
            <div className="card-body">
              <h5 className="card-title">Track.name</h5>
              <a href="#" className="btn">
              <i class='bx bxs-album' />
                Play
              </a>
            </div>
          </div>
          <div className="card mx-2 my-2" style={{ width: "18rem" }}>
            <img src="https://http2.mlstatic.com/D_NQ_NP_638132-MLM43571734909_092020-O.jpg" className="card-img-top" style={{width: "150px", height:"150px"}}/>
            <div className="card-body">
              <h5 className="card-title">Track.name</h5>
              <a href="#" className="btn">
              <i class='bx bxs-album' />
                Play
              </a>
            </div>
          </div>  
        </div>
      </div>
      </div>
      <hr />
      <h3 className="text-white">Artistas</h3>
      <hr />
      <div className="ArtistList">
      <div className="row">
          <div className="card mx-2 my-2" style={{ width: "18rem" }}>
            <img src="https://http2.mlstatic.com/D_NQ_NP_638132-MLM43571734909_092020-O.jpg" className="card-img-top" style={{width: "150px", height:"150px"}}/>
            <div className="card-body">
              <h5 className="card-title">Playlist.name</h5>
              <p className="card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eligendi aperiam, velit est expedita tempora quam dolore tenetur id nulla officia at distinctio facilis, et voluptatem nemo ea dolor! Iste.
              </p>
              <a href="#" className="btn">
                Go to the playlist
              </a>
            </div>
          </div>

          <div className="card mx-2 my-2" style={{ width: "18rem" }}>
            <img src="https://http2.mlstatic.com/D_NQ_NP_638132-MLM43571734909_092020-O.jpg" className="card-img-top" style={{width: "150px", height:"150px"}}/>
            <div className="card-body">
              <h5 className="card-title">Playlist.name</h5>
              <p className="card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eligendi aperiam, velit est expedita tempora quam dolore tenetur id nulla officia at distinctio facilis, et voluptatem nemo ea dolor! Iste.
              </p>
              <a href="#" className="btn">
                Go to the playlist
              </a>
            </div>
          </div>

          <div className="card mx-2 my-2" style={{ width: "18rem" }}>
            <img src="https://http2.mlstatic.com/D_NQ_NP_638132-MLM43571734909_092020-O.jpg" className="card-img-top" style={{width: "150px", height:"150px"}}/>
            <div className="card-body">
              <h5 className="card-title">Playlist.name</h5>
              <p className="card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eligendi aperiam, velit est expedita tempora quam dolore tenetur id nulla officia at distinctio facilis, et voluptatem nemo ea dolor! Iste.
              </p>
              <a href="#" className="btn">
                Go to the playlist
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
  }
  export default SearchPage