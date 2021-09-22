import { CLIENT } from "../types";

const INITIAL_STATE = {
    all: [],
    selected: {},
    count: 0
};


const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){

        case CLIENT.getAll:
            state.all = action.client;
            return state;
        case CLIENT.select:
            state.selected = action.client;
            return state;
        case CLIENT.count:
            state.count = action.count;
            return state;
        default:
            return state;

    }
};


export default reducer;