import { callServices, getServiceById } from "../../services/servico.service"
import { SERVICOS } from "../types";


export const getAllServices = () => {
    return async(dispatch) => {
        const result = await callServices();
        dispatch({type: SERVICOS.getAll, servicos: result.data})

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





