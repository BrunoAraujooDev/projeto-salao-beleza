import { SERVICOS } from "../types";

const INITIAL_STATE = {
    all: [],
};


const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){

        case SERVICOS.getAll:
            state.all = action.servicos;
            return state;
        default:
            return state;

    }
};


export default reducer;