import { AUTH } from "../types";
import { getToken } from "../../config/storage";

const INITIAL_STATE = {
    auth: getToken() || {}
};


const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case AUTH.login:
            state.auth = action.result;
            return state;
            
        default:
            return state;

    }
};


export default reducer;