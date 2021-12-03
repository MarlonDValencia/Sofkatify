import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { deleteTrack, getAllTracksPlaylist } from "../actions/track";
import { updatePlaylist } from "../actions/playlist";
import { Link, useNavigate } from "react-router-dom";


const PlaylistView = () => {
  const canciones = useSelector((state) => state.tracksrandom);
  const user = useSelector((state) => state.user);
  const playlists = useSelector((state) => state.playlists);
  const playlist = useSelector((state) => state.playlist);
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.tracks);
  const [estado, setEstado] = useState(0)

  const editarPlaylitst = async (e,id,playlist) => {
    e.preventDefault();
    let datos;
    const { value: formValues } = await Swal.fire({
      title: "Editar Playlist",
      html:
        "<p>Nuevo nombre nlaylist: </p>" +
        '<input minlength="3" required="true" id="swal-input" class="swal2-input">' +
        "<p>Nueva descripcion de la playlist: </p>" +
        '<input minlength="3" required="true" id="swal-input1" class="swal2-input">',
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("swal-input").value,
          document.getElementById("swal-input1").value,
        ];
      },
    });
    if (formValues) {
      datos = formValues;
      if (datos[0] === "") {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Inserte nombre de la playlist",
        });
      }else if(datos[0].length < 3){
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Nombre de playlist demasiado corto",
        });
      }else{
        Swal.fire({
          icon: "success",
          title: "Playlist editada!",
          text: `La playlist ${datos[0]} ha sido editada`,
        });
        let playlist_editada = {
          id: playlist.id,
          name: datos[0],
          description: datos[1]
        }
        console.log(user.id)
        console.log(playlist)
        dispatch(updatePlaylist(user.id, playlist_editada))
      }
    }
  }

  const eliminarTrack = (e,id) => {
    e.preventDefault()
    Swal.fire({
      title: "Estás seguro de eliminar esta canción?",
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
        Swal.fire("Canción Eliminada", "", "info");
        setEstado(estado+1)
        dispatch(deleteTrack(id))
        dispatch(getAllTracksPlaylist(playlist.id))
      }
    });
  }

  useEffect(() => {
    dispatch(getAllTracksPlaylist(playlist.id))
  }, [dispatch,estado]);

  return (
    <div className="container " style={{ marginTop: "70px" }}>
      <div className="playlist-name row">
        <h1 className="col-md-12 text-white">{playlist.name}</h1>
        <button
        className="mx-2 song-add btn col-md-3"
        onClick={(e)=>{
          editarPlaylitst(e,user.id,playlist)
        }}
        >Editar playlist
        </button>
        <hr />
      </div>

      <div className="playlist-desc">
        <p className="text-white">{playlist.description}</p>
      </div>

      <div className="songs">
        <ul class="list-group">
          {tracks.map((cancion) => {
            return (
              <>
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
                      <button className="btn" 
                      style={{marginLeft:"225px", width:"200px"}}
                      onClick={((e)=>{
                        eliminarTrack(e,cancion.id)
                      })}
                      >Eliminar
                      </button>
                    </div>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PlaylistView;
