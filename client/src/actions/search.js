export const SEARCH_TRACKS = "SEARCH_TRACKS";
export const SEARCH_TRACKS_ARTIST = "SEARCH_TRACKS_ARTIST";
export const SEARCH_TRACKS_ALBUM = "SEARCH_TRACKS_ALBUM";
export const SEARCH_TRACKS_TRACK = "SEARCH_TRACKS_TRACK";
export const SEARCH_TRACKS_RANDOM = "SEARCH_TRACKS_RANDOM"

const API_DEEZER = "https://api.deezer.com/search";
const API_DEEZER_IDTRACK = "https://api.deezer.com/track/"

//Búsqueda de tracks por defecto
export function searchTracks(input) {
    return async function(dispatch) {
        //Limita la búsqueda a los primeros 11 resultados
        return await fetch(API_DEEZER + "?q=" + input + "&limit=11")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: SEARCH_TRACKS, payload: json })
            })
            .catch(error => console.error('Error:', error))
    };
}

export function searchTracksByArtist(artist) {
    return async function(dispatch) {
        return await fetch(API_DEEZER + "/artist?q=" + artist + "&limit=11")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: SEARCH_TRACKS_ARTIST, payload: json })
            })
            .catch(error => console.error('Error:', error))
    };
}

export function searchTracksByAlbum(album) {
    return async function(dispatch) {
        return await fetch(API_DEEZER + "/album?q=" + album + "&limit=11")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: SEARCH_TRACKS_ALBUM, payload: json })
            })
            .catch(error => console.error('Error:', error))
    };
}

export function searchTracksByTrack(track) {
    return async function(dispatch) {
        return await fetch(API_DEEZER + "/track?q=" + track + "&limit=11")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: SEARCH_TRACKS_TRACK, payload: json })
            })
            .catch(error => console.error('Error:', error))
    };
}

export function searchTracksRandom(id) {
    return async function(dispatch) {
        //Limita la búsqueda a los primeros 11 resultados
        return await fetch(API_DEEZER_IDTRACK + id)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: SEARCH_TRACKS_RANDOM, payload: json })
            })
            .catch(error => console.error('Error:', error))
    };
}