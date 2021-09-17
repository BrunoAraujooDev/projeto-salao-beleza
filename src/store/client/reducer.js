import { CLIENT } from "../types";

const INITIAL_STATE = {
    all: [],
    selected: {}
};


const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){

        case CLIENT.getAll:
            state.all = action.client;
            return state;
        case CLIENT.select:
            state.selected = action.client;
            return state;
        case CLIENT.create:
            state.all = [...state.all, action.data]
            return state;
        default:
            return state;

    }
};


export default reducer;