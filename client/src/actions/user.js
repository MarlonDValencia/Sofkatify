export const GET_USERS = "GET_USERS";
export const CREATE_USER = "CREATE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";
export const LOGGED_USER = "LOGGED_USER";

const HOST_API = "http://127.0.0.1:8080/api/";
//Obtencion de usuarios registrados
export function logginUser(){
    return async function(dispatch){
        return dispatch({ type: LOGGED_USER, payload: true })
    }
}

export function getAllUsers() {
    return async function(dispatch) {
        return await fetch(HOST_API + "users")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_USERS, payload: {users: json} })
            })
            .catch(error => console.error('Error:', error))
    };
}

export function createUser(request) {
    return async function(dispatch) {
        return await fetch(HOST_API + "user", {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(json => {
            dispatch({ type: CREATE_USER, payload: json })
        })  
        .catch(error => console.error('Error:', error))
    };
}

export function updateUser(id, request) {
    return async function(dispatch) {
        return await fetch(HOST_API + "user/" + id, {
            method: "PUT",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(json => {
            dispatch({ type: UPDATE_USER, payload: json })
        })  
        .catch(error => console.error('Error:', error))
    };
}

export function deleteUser(id) {
    return async function(dispatch) {
        return await fetch(HOST_API + "user/" + id, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(json => {
            dispatch({ type: DELETE_USER, payload: id })
        })    
        .catch(error => console.error('Error:', error))
    };
}