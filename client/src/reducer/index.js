//import {  } from "../actions/index.js";

const initialState = {
    list: {
        elements: []
    },
    todo: {
        elements: [],
        item: {}
    }
};

//Se establecen las funcionalidaes de cada una de las acciones en este reducer
const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        
        // case LIST_FINDED:
        // return {
        //     ...state,
        //     list: { elements: action.payload.list } 
        // };
        
        default:
            return state;
    }
}

export default rootReducer;