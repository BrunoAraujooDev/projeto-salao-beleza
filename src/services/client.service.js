import http from "../config/http";

const path = "/clientes"


export const getClientService = (offset=1, limit=10) => http.get(`${path}?_start=${offset}&_limit=${limit}`);

export const getCountClients = () => http.get(`${path}/count`);

export const getClientServiceById = (id) => http.get(`${path}/${id}`);

export const deleteClient = (id) => http.delete(`${path}/${id}`);

export const createNewClient = (data) => http.post(`${path}`, data);
