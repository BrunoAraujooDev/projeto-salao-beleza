import { createNewClient, getClientService, getClientServiceById } from "../../services/client.service";
import { CLIENT } from "../types";


export const getClients = () => {
    return async(dispatch) => {
        const result = await getClientService();
        dispatch({type: CLIENT.getAll, client: result.data})

    }
}

export const selectClient = (id) => {
    return async(dispatch) => {
        const result = await getClientServiceById(id);
        dispatch({type: CLIENT.select, client: result.data})
        

    }
}

export const createClient = (data) => {
    return async(dispatch) => {

        const result = await createNewClient(data);
        dispatch({type: CLIENT.create, client: result.data})
        return result.data;
    }
}