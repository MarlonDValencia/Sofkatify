import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
const SearchPage = () => {
  const results = useSelector((state) => state.search);

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const [state, setState] = useState({
    username: "",
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
              
            <ul class="list-group">
              </ul>
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
                    <h3><strong>{cancion.title}</strong></h3>
                    <h4>{cancion.artist[0]}</h4>
                    <h6>{cancion.album[0]}</h6>
                    <p>{cancion.duration}</p>
                    </div>
                    <div className="col-md-8">
                    <iframe className="mx-4" title="deezer-widget" src= {`https://widget.deezer.com/widget/dark/track/${cancion.id}`} width="600" height="150" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
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
