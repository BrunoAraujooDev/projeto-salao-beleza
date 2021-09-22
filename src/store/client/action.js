import { createNewClient, getClientService, getClientServiceById, getCountClients } from "../../services/client.service";
import { CLIENT } from "../types";


export const getClients = (offset=1, limit=10) => {
    return async(dispatch) => {
        const count = await getCountClients();
        const result = await getClientService(offset, limit);
        dispatch({type: CLIENT.getAll, client: result.data});
        dispatch({type: CLIENT.count, count: count.data});

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
        // dispatch({type: CLIENT.create, client: result.data})
        return result.data;
    }
}