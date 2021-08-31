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
        console.log(id)
        dispatch({type: SERVICOS.select, servico: result.data})
    }
}


// export const selectServiceByID = (servico) => {
//     return async(dispatch, getState) => {
//         const resposta = getState();
//         const { selected } = resposta.servico;
//         const result = await getServiceById(servico.id);
//         console.log(resposta);
//         const data = Object.values(selected).filter( item => item.id === result.data.id)
//         dispatch({type: SERVICOS.select, servico: data})
//         console.log(data);

//     }
// }