export const GET_TRACKS = "GET_TRACKS";
export const CREATE_TRACK = "CREATE_TRACK";
export const DELETE_TRACK = "DELETE_TRACK";

const HOST_API = "http://127.0.0.1:8080/api/";

//Obtencion de canciones por playlist
export function getAllTracksPlaylist(id) {
    return async function(dispatch) {
        return await fetch(HOST_API + id + "/tracks")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_TRACKS, payload: {tracks: json} })
            })
            .catch(error => console.error('Error:', error))
    };
}

export function createTrack(idPlaylist, request) {
    return async function(dispatch) {
        return await fetch(HOST_API + idPlaylist + "/track", {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(json => {
            dispatch({ type: CREATE_TRACK, payload: json })
        })  
        .catch(error => console.error('Error:', error))
    };
}

export function deleteTrack(id) {
    return async function(dispatch) {
        return await fetch(HOST_API + "track/" + id, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(json => {
            dispatch({ type: DELETE_TRACK, payload: id })
        })    
        .catch(error => console.error('Error:', error))
    };
}