import "../index.css";
import caratula from "../assets/imagen.png";
import { useDispatch, useSelector } from "react-redux";
import { searchTracksRandom } from "../actions/search";
import React, { useState, useEffect } from "react";
import { getAllPlaylistsUser, deletePlaylist, getPlaylistUser } from "../actions/playlist";
import Swal from "sweetalert2";
import { createTrack, getAllTracksPlaylist } from "../actions/track";
import { Link, useNavigate } from 'react-router-dom';
import { AiFillCloseCircle } from "react-icons/ai";

const UserLibrary = () => {
  
    let navigate = useNavigate();
  
    const redirect = () => {
      navigate(`/PlaylistView`)
    }
  
    const canciones = useSelector((state) => state.tracksrandom);
    const user = useSelector((state) => state.user);
    const playlists = useSelector((state) => state.playlists);
    const dispatch = useDispatch();
    const tracks = useSelector((state) => state.tracks);
  const [estado, setEstado] = useState(0)
  console.log(playlists);

  const eliminarPlaylist = (id, e) => {
    e.preventDefault();
    Swal.fire({
      title: "Estás seguro de eliminar esta playlist?",
      showConfirmButton: false,
      showDenyButton: true,
      showCancelButton: true,
      denyButtonText: `Sí`,
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Playlist Eliminada", "", "info");
        setEstado(estado+1)
        console.log("Borrar playlist")
        dispatch(deletePlaylist(id));
        dispatch(getAllPlaylistsUser(user.id))
      }
    });
  };

  const onClick = (e, playlist) => {
    e.preventDefault()
    dispatch(getPlaylistUser(playlist))
    redirect()
  }

  useEffect(() => {
    dispatch(getAllPlaylistsUser(user.id))
  }, [dispatch,estado]);

  return (
    <>
      <div className="container" style={{ marginTop: "70px" }}>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Library
            </li>
          </ol>
        </nav>

        <div className="row">
          <h1>Tu Biblioteca</h1>

          {(playlists.length > 0) ? (playlists.map((playlist) => {
            return (
              <>
                <div className="card mx-2 my-2" style={{ width: "18rem" }}>
                  <button
                    className="btn-exit"
                    onClick={(e) => {
                      eliminarPlaylist(playlist, e);
                    }}
                  >
                    <AiFillCloseCircle />
                  </button>
                  <img
                    src={caratula}
                    className="card-img-top"
                    style={{ width: "150px", height: "150px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{playlist.name}</h5>
                    <p className="card-text">{playlist.description}</p>
                    <a href="#"
                    className="btn"
                    onClick={((e)=>{
                      onClick(e,playlist)
                    })}
                    >
                      Ir a la playlist
                    </a>
                  </div>
                </div>
              </>
            );
          })) : (null)}
        </div>
        <hr />
      </div>
    </>
  );
};

export default UserLibrary;
