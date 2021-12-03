import "../index.css";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { createPlaylist } from "../actions/playlist";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { AiFillCloseCircle } from "react-icons/ai";

const Sidebar = () => {

  let navigate = useNavigate();

  const redirect = () => {
    navigate(`/Library`)
  }

  const dispatch = useDispatch()

  const user = useSelector(state => state.user)

  const goPlaylist = (e) => {
    e.preventDefault()
    redirect()
  }
  const onClick = async (e) => {
    e.preventDefault();
    let datos;
    const { value: formValues } = await Swal.fire({
      title: "Crear Playlist",
      html:
        "<p> Nombre Playlist: </p>" +
        '<input minlength="3" required="true" id="swal-input11" class="swal2-input">' +
        "<p>Descripcion de la playlist: </p>" +
        '<input minlength="3" required="true" id="swal-input22" class="swal2-input">',
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("swal-input11").value,
          document.getElementById("swal-input22").value,
        ];
      },
    });
    if (formValues) {
      datos = formValues;
      console.log(datos);
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
          title: "Playlist creada!",
          text: `La playlist ${datos[0]} ha sido creada`,
        });
        let playlist = {
          id: null,
          name: datos[0],
          description: datos[1]
        }
        console.log(user.id)
        console.log(playlist)
        dispatch(createPlaylist(user.id, playlist))
      }
    }
  };

  return (
    <>
      <div className="sidebar">
        <div className="logo_content">
          <div className="logo">
            <i className="bx bx-music"></i>
            <div className="logo_name">Sofkatify</div>
          </div>
          <i class="bx bx-menu" id="btn"></i>
        </div>
        <ul className="navlist list-group">
          <li>
            <i class="bx bxs-user">
              <span>Username</span>
            </i>
            {/*<span className="tooltip"></span>*/}
          </li>
          <li>
            <a 
            href=""
            onClick={goPlaylist}
            >
              <i class="bx bxs-playlist">
                <span>Mis Playlist</span>
              </i>
            </a>
            {/*<span className="tooltip"></span>*/}
          </li>
          <hr />

          <li>
            <a href="" onClick={onClick}>
              <i class="bx bxs-playlist">
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
              <img src="profile jpg" alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
