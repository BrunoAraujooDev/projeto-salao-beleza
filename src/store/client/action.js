import { createNewClient, deleteServiceClient, editNewClient, getClientService, getClientServiceById, getCountClients } from "../../services/client.service";
import { CLIENT } from "../types";


export const getClients = (page, limit) => {
    return async(dispatch) => {
        const count = await getCountClients();
        const result = await getClientService(page, limit);
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

export const editClient = (data) => {
    return async(dispatch) => {

        const result = await editNewClient(data);
        // dispatch({type: CLIENT.create, client: result.data})
        return result.data;
    }
}

export const deleteClient = (id) => {
    return async(dispatch) => {

        const result = await deleteServiceClient(id);
        // dispatch({type: CLIENT.create, client: result.data})
        return result.data;
    }
}