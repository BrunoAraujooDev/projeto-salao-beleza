import { callServices } from "../../services/servico.service"
import { SERVICOS } from "../types";


export const getAllServices = () => {
    return async(dispatch) => {
        const result = await callServices();
        dispatch({type: SERVICOS.getAll, servicos: result.data})

    }

}