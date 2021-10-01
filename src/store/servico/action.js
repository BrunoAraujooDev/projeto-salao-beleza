import { saveUser } from "../../config/storage";
import { callServices, createNewService, editNewService, getServiceById } from "../../services/servico.service"
import { setNewAuth } from "../auth/action";
import { SERVICOS } from "../types";


export const getAllServices = () => {
    return async(dispatch) => {
        const result = await callServices();
        dispatch({type: SERVICOS.getAll, servicos: result.data})
        return result.data;

    }
}

export const selectService = (servico) => {
    return async(dispatch) => {
        dispatch({type: SERVICOS.select, servico: servico})
        

    }
}

export const selectServiceByID = (id) => {
    return async(dispatch) => {
        const result = await getServiceById(id);
        
        dispatch({type: SERVICOS.select, servico: result.data})
    }
}

export const createService = (servico) => {
    return async(dispatch, getState) => {
        const result = await createNewService(servico);

        if(result.status === 200){
            const { auth } = getState();

            const newAuth = {
                ...auth.auth,
                user: {
                    ...auth.auth.user,
                    servico: result.data
                }
            }
            saveUser(newAuth);
            dispatch(setNewAuth(newAuth));
        }
        return result.data;
    }
}

export const editService = (data) => {
    return async(dispatch) => {

        const result = await editNewService(data);
        // dispatch({type: CLIENT.create, client: result.data})
        return result.data;
    }
}





