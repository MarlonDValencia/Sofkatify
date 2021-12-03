export const GET_PLAYLISTS = "GET_PLAYLISTS";
export const CREATE_PLAYLIST = "CREATE_PLAYLIST";
export const UPDATE_PLAYLIST = "UPDATE_PLAYLIST";
export const DELETE_PLAYLIST = "DELETE_PLAYLIST";
export const GET_PLAYLIST = "GET_PLAYLIST"
const HOST_API = "http://127.0.0.1:8080/api/";

//Obtencion de playlists por usuario
export function getAllPlaylistsUser(id) {
    return async function(dispatch) {
        return await fetch(HOST_API + id + "/playlists")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_PLAYLISTS, payload: {playlists: json} })
            })
            .catch(error => console.error('Error:', error))
    };
}

export function createPlaylist(idUser, request) {
    return async function(dispatch) {
        return await fetch(HOST_API + idUser + "/playlist", {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(json => {
            dispatch({ type: CREATE_PLAYLIST, payload: json })
        })  
        .catch(error => console.error('Error:', error))
    };
}

export function updatePlaylist(idUser, request) {
    return async function(dispatch) {
        return await fetch(HOST_API + idUser + "/playlist", {
            method: "PUT",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(json => {
            dispatch({ type: UPDATE_PLAYLIST, payload: json })
        })  
        .catch(error => console.error('Error:', error))
    };
}

export function deletePlaylist(id) {
    return async function(dispatch) {
        return await fetch(HOST_API + "playlist/" + id, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(json => {
            dispatch({ type: DELETE_PLAYLIST, payload: id })
        })    
        .catch(error => console.error('Error:', error))
    };
}

export function getPlaylistUser(playlist){
    return function(dispatch){
        dispatch({type: GET_PLAYLIST, payload: playlist})
    }
}