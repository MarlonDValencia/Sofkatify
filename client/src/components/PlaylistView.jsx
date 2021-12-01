const PlaylistView = () => {
  return (
    <div className="container">
      <div className="playlist-name row">
        <h1 className="col-md-12 text-white">Playlist.Name</h1>
        <button className="song-add btn col-md-3">Editar playlist</button>
        <button className="song-add btn col-md-3">Agregar Canción</button>
        <hr />
      </div>

      <div className="playlist-desc">
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam voluptates velit eaque dignissimos quam at provident possimus magni cupiditate, nam placeat perferendis accusamus beatae veniam architecto repellendus ullam unde veritatis.
        </p>
      </div>
      <div className="songs">
        <ul class="list-group">
          <li class="list-group-item">
          <div className="row">
          <p className="col-md-10 song-title">Eminem - Without Me</p>
          <button className="col-md-2 btn">Eliminar</button>
          </div>
          </li>
          <li class="list-group-item">
          <div className="row">
          <p className="col-md-10 song-title">Eminem - Without Me</p>
          <button className="col-md-2 btn">Eliminar</button>
          </div>
          </li>
          <li class="list-group-item">
          <div className="row">
          <p className="col-md-10 song-title">Eminem - Without Me</p>
          <button className="col-md-2 btn">Eliminar</button>
          </div>
          </li>
          <li class="list-group-item">
          <div className="row">
          <p className="col-md-10 song-title">Eminem - Without Me</p>
          <button className="col-md-2 btn">Eliminar</button>
          </div>
          </li>
          <li class="list-group-item">
          <div className="row">
          <p className="col-md-10 song-title">Eminem - Without Me</p>
          <button className="col-md-2 btn">Eliminar</button>
          </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PlaylistView;
