import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Button } from "react-bootstrap";
import { createTrack, getAllTracksPlaylist } from "../actions/track";
import Swal from "sweetalert2";
const SearchPage = () => {
  const results = useSelector((state) => state.search);

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const playlists = useSelector((state) => state.playlists);
  const tracks = useSelector((state) => state.tracks);

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onClick = (e, cancion) => {
    e.preventDefault();
    let match = false;
    dispatch(getAllTracksPlaylist(state.playlist_id));
    tracks.forEach((track) => {
      if (track.id === cancion.id) {
        match = true;
      }
    });
    if (match) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Dicha canción ya se encuentra en esta playlist",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Bien!",
        text: "Canción agregada con éxito",
      });
      dispatch(createTrack(state.playlist_id, cancion));
    }
  };
  const [state, setState] = useState({
    username: "",
    playlist_id: 0,
    password: "",
    mensaje: "",
    error: false,
  });

  return (
    <>
      <div className="container" style={{ marginTop: "70px" }}>
        <h1 className="text-white">Resultados de la busqueda</h1>
        <hr />
        <h3 className="text-white">Canciones</h3>
        <hr />
        <div className="SongList">
          <div className="container">
            <div className="row">
              {results.map((cancion) => {
                return (
                  <li className="list-group-item">
                    <div className="mt-3 row">
                      <div className="col-md-2">
                        <img
                          src={cancion.album[1]}
                          className="card-img-top"
                          style={{ width: "150px", height: "150px" }}
                        />
                      </div>
                      <div className="col-md-2">
                        <h3>
                          <strong>{cancion.title}</strong>
                        </h3>
                        <h4>{cancion.artist[0]}</h4>
                        <h6>{cancion.album[0]}</h6>
                        <p>{cancion.duration}</p>
                      </div>
                      <div className="col-md-8">
                        <iframe
                          className="mx-4"
                          title="deezer-widget"
                          src={`https://widget.deezer.com/widget/dark/track/${cancion.id}`}
                          width="600"
                          height="150"
                          frameborder="0"
                          allowtransparency="true"
                          allow="encrypted-media; clipboard-write"
                        ></iframe>
                        <select
                          name="playlist_id"
                          onChange={onChange}
                          value={state.playlist_id}
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Agrega a una playlist</option>
                          {playlists.map((playlist) => {
                            return (
                              <>
                                <option value={playlist.id}>
                                  {playlist.name}
                                </option>
                              </>
                            );
                          })}
                        </select>
                        {state.playlist_id > 0 ? (
                          <button
                            onClick={(e) => onClick(e, cancion)}
                            className="btn my-2"
                            style={{marginLeft:"280px"}}
                          >
                            Agregar
                          </button>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchPage;
