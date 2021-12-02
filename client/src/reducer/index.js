import { SEARCH_TRACKS, SEARCH_TRACKS_ARTIST, SEARCH_TRACKS_ALBUM, SEARCH_TRACKS_TRACK } from "../actions/search.js";
import { GET_USERS, CREATE_USER, UPDATE_USER, DELETE_USER, LOGGED_USER } from "../actions/user.js";
import { GET_PLAYLISTS, CREATE_PLAYLIST, UPDATE_PLAYLIST, DELETE_PLAYLIST } from "../actions/playlist.js";
import { GET_TRACKS, CREATE_TRACK, DELETE_TRACK } from "../actions/track.js";

const initialState = {
    users: [],
    user: {},
    playlists: [],
    playlist: {},
    tracks: [],
    track: {},
    search: [],
    loggin: false,
};

//Se establecen las funcionalidaes de cada una de las acciones en este reducer
const rootReducer = (state = initialState, action) => {
    //Este método ayuda a organizar la información relevante de cada track encontrado, para que se mapee luego
    const filtrarResultados = (json) => {
        
        let data = json.data;
        if(data.length > 0){

            let tracks = data.map((track) => {

                let segundosTotales = track.duration;
                let conversion = (segundosTotales / 60);
                let minutos = Math.floor(conversion);
                let segundos = Math.round((conversion % 1) * 60);
                let duration = ""+ minutos +":"+ segundos;
    
                let trackFinal = {
                    id: track.id,
                    title: track.title,
                    artist: [track.artist.name, track.artist.picture],
                    album: [track.album.title, track.album.cover],
                    duration: duration
                }
                return trackFinal;
            })
            return tracks;
        }
        return data;
        
    }


    switch(action.type) {
        
        case SEARCH_TRACKS:
            return {
                ...state,
                search: filtrarResultados(action.payload) 
            };

        case SEARCH_TRACKS_ARTIST:
            return {
                ...state,
                search: filtrarResultados(action.payload) 
            };

        case SEARCH_TRACKS_ALBUM:
            return {
                ...state,
                search: filtrarResultados(action.payload) 
            };

        case SEARCH_TRACKS_TRACK:
            return {
                ...state,
                search: filtrarResultados(action.payload) 
            };
        
        case GET_USERS:
            return {
                ...state,
                users: action.payload.users 
            };
        
        case CREATE_USER:
            return {
                ...state,
                user: action.payload,
                users: [...state.users, action.payload]
            };

        case UPDATE_USER:

            const users = state.users.map((user) => {
                if(user.id === action.payload.id){
                    return action.payload;
                }
                return user;
            })

            return {
                ...state,
                user: action.payload,
                users: users
            };
        
        case DELETE_USER:

            const usuarios = state.users.filter((user) => {
                return user.id !== action.payload;
            })

            return {
                ...state,
                users: usuarios
            };

        case GET_PLAYLISTS:
            return {
                ...state,
                playlists: action.payload.playlists
            };

        case CREATE_PLAYLIST:
            return {
                ...state,
                playlist: action.payload,
                playlists: [...state.playlists, action.payload]
            };
        
        case UPDATE_PLAYLIST:

            const playlists = state.playlists.map((playlist) => {
                if(playlist.id === action.payload.id){
                    return action.payload;
                }
                return playlist;
            })

            return {
                ...state,
                playlist: action.payload,
                playlists: playlists
            };
        
        case DELETE_PLAYLIST:

            const playLists = state.playlists.filter((playlist) => {
                return playlist.id !== action.payload;
            })

            return {
                ...state,
                playlists: playLists
            };
        
        case GET_TRACKS:
            return {
                ...state,
                tracks: action.payload.tracks
            };

        case CREATE_TRACK:
            return {
                ...state,
                track: action.payload,
                tracks: [...state.tracks, action.payload]
            };
        
        case DELETE_TRACK:

            const tracks = state.tracks.filter((track) => {
                return track.id !== action.payload;
            })

            return {
                ...state,
                tracks: tracks
            };

        case LOGGED_USER:
            return {
                ...state,
                loggin: action.payload
            };
            
        default:
            return state;
    }
}

export default rootReducer;