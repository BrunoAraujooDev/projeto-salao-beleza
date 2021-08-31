import { SERVICOS } from "../types";

const INITIAL_STATE = {
    all: [],
    selected: {}
};


const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){

        case SERVICOS.getAll:
            state.all = action.servicos;
            return state;
        case SERVICOS.select:
            state.selected = action.servico;
            return state;
        default:
            return state;

    }
};


export default reducer;