export const LIST_FINDED = "list.LIST_FINDED";

//Obtencion de listas por defecto
export function findAllLists() {
    return async function(dispatch) {
        return await fetch(HOST_API + "list")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: LIST_FINDED, payload: {list: json} })
            })
            .catch(error => console.error('Error:', error))
    };
} 