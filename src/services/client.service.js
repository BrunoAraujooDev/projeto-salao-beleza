import http from "../config/http";

const path = "/clientes"


export const getClientService = () => http.get(path);

export const getClientServiceById = (id) => http.get(`${path}/${id}`);

export const deleteClient = (id) => http.delete(`${path}/${id}`);

export const createNewClient = (data) => http.post(`${path}`, data);
